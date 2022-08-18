import pandas as pd

class Excel:   

    def __init__(self, file):
        self.file = pd.ExcelFile(file)
        self.excelList = []

    def getExcelList(self):
        groups = self.file.sheet_names
        for group in groups:
            self.excelList.append(pd.read_excel(self.file, sheet_name=group))
        return self.excelList

    def getGroupList(self):
        return self.file.sheet_names
    
    def getGroupCount(self):
        return len(self.file.sheet_names)
    
    def getAllGroupAsDF(self, group):
        return pd.DataFrame(self.file.parse(group))

    def getStudentListByGroup(self, group):
        return list(self.file.parse(group)['Alumno'])

    def getStudentCount(self, group):
        return len(self.file.parse(group)['Alumno'])

    def getProfesor(self, group):
        return str(self.file.parse(group)['Profesor'][0])

    def getDegreeByGroup(self, group):
        return self.file.parse(group)['Grado'][0]

class ExcelCreator:

    def __init__(self):
        self.excel = None

    def createExcel(self):     
        df = pd.DataFrame(columns=['Grado','Profesor', 'Alumno', 'Inicio de ciclo', 'Fin de ciclo'])
        self.excel = df.to_excel(r'Grupos.xlsx', sheet_name='Grupo (Nombre de grupo)', index=False)
        return self.excel