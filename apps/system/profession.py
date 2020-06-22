from django.core.paginator import Paginator
from django.http import JsonResponse
from .models import professionManage, classesManage, classesBindProfession, \
    studentManage
from utils.tools import getIndex, listSplit


def addProfession(requestData):
    """
    创建专业操作函数
    :param requestData:
    :return:
    """
    if professionManage.objects.filter(professionName=requestData['professionName']).values():
        return JsonResponse({'ret': 1, 'data': '已有相同名称专业,请重命名！'})
    else:
        index = getIndex(professionManage, 'professionCode')
        if professionManage.objects.create(professionCode=index, professionName=requestData['professionName']):
            return JsonResponse({'ret': 0, 'data': '添加专业成功！'})
        else:
            return JsonResponse({'ret': 1, 'data': '添加专业失败,请稍后重试！'})


def editProfession(requestData):
    """
    修改专业名称操作函数
    :param requestData:
    :return:
    """
    professionName = ''
    for i in professionManage.objects.values():
        if i['professionCode'] == requestData['professionCode']:
            professionName = i['professionName']
    if professionManage.objects.filter(professionCode=requestData['professionCode']).update(
            professionName=requestData['professionName']):
        return JsonResponse({'ret': 0, 'data': '修改专业名称成功！'})
    else:
        return JsonResponse({'ret': 1, 'data': '修改专业名称失败,请稍后重试！'})


def deleteProfession(requestData):
    """
    删除专业操作函数
    :param requestData:
    :return:
    """
    professionCode = requestData['professionCode']
    # 删除专业下的班级
    classesCodeList = [i['classesCode'] for i in
                       list(classesBindProfession.objects.filter(professionCode=professionCode).values())]
    lock = 0
    codeLen = len(classesCodeList)
    for i in classesCodeList:
        classesManage.objects.filter(classesCode=i).update(isDelete=True)
        lock = lock + 1
    if lock == codeLen and professionManage.objects.filter(professionCode=professionCode).update(isDelete=True) and \
            classesBindProfession.objects.filter(professionCode=professionCode).update(isDelete=True):
        studentManage.objects.filter(professionCode=professionCode).update(professionCode='0', classesCode='0')

        return JsonResponse({'ret': 0, 'data': '删除专业成功！'})
    else:
        return JsonResponse({'ret': 1, 'data': '删除专业失败,请稍后重试！'})


def getProfessionData(requestData):
    """
    获取专业管理页面的专业列表数据
    :param requestData:
    :return:
    """
    queryData = requestData['query']  # 查询的元数据
    keyWord = queryData['keyWord']  # 查询的关键词
    pageNum = queryData['pageNum']  # 当前页数
    pageSize = queryData['pageSize']  # 一页多少数据

    # 分析专业容器绑定哪些班级子容器
    professionData = []  # 专业容器(其中包班级子容器)
    for i in professionManage.objects.filter(professionName__contains=keyWord, isDelete=False).values():
        classesData = {}  # 班级子容器,一次外层for循环代表一个专业容器，并把这个子容器加入到父容器
        hh = []  # 班级数据容器(可容纳多个班级)
        for ii in classesBindProfession.objects.filter(isDelete=False).values():
            if str(i['professionCode']) == str(ii['professionCode']):
                classesData = {'classesCode': ii['classesCode']}
                hh.append(classesData)
        professionData.append({'professionCode': i['professionCode'], 'classesData': hh})

    professionContainer = []
    # 自定义分页(提高系统运行速度)
    professions = list(professionManage.objects.filter(isDelete=False).values())
    myData = listSplit(professions, pageSize, pageNum)
    for i in myData['currentData']:
        hh = []
        professionCode = i['professionCode']
        professionName = i['professionName']
        addTime = i['addTime']
        professionClassesNum = 0
        for ii in professionData:
            if str(i['professionCode']) == str(ii['professionCode']):
                professionClassesNum = len(ii['classesData'])
                professionHumanNum = 0
                for iii in ii['classesData']:
                    classesCode = iii['classesCode']
                    professionHumanNum = professionHumanNum + len(
                        studentManage.objects.filter(classesCode=classesCode, isDelete=False).values())
                classesData = {'professionCode': professionCode, 'professionName': professionName,
                               'professionHumanNum': professionHumanNum, 'professionClassesNum': professionClassesNum,
                               'addTime': addTime}
                hh.append(classesData)
        professionContainer.append(hh)

    userList = []
    for i in professionContainer:
        for ii in i:
            userList.append(ii)

    return JsonResponse({
        'ret': 0,
        'data': userList,
        'pageNum': pageNum,
        'total': myData['dataSum'],
    })
