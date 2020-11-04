import cgi

import mysql.connector


class tarea2db:

    def __init__(self):
        self.db = mysql.connector.connect(
            host="localHost",
            user="root",
            password="",
            database="cc500235_db",
        )
        self.cursor = self.db.cursor()

    def save_data(self, data):
        sql = ''' 
            INSERT INTO pedido (nombre, telefono, direccion, comuna, tipo_masa, ingrediente, comentario)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            '''
        self.cursor.execute(sql, data)
        self.db.commit()

    def get_all(self, tableName):
        self.cursor.execute(f'SELECT * FROM {tableName}')
        return self.cursor.fetchall()

    def save_domicilio(self, domicilio):
        sql = '''
            INSERT INTO domicilio (fecha_ingreso, comuna_id, nombre_calle, numero, sector, nombre_contacto, email, celular) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
            '''
        self.cursor.execute(sql, domicilio)
        self.db.commit()
        return True

    def save_mascotaDomicilio(self, mascotaDomicilio):
        sql = '''
            INSERT INTO mascota_domicilio (tipo_mascota_id, edad, color, raza, esterilizado, vacunas_al_dia, domicilio_id) 
            VALUES (%s, %s, %s, %s, %s, %s, %s);
            '''
        self.cursor.execute(sql, mascotaDomicilio)
        self.db.commit()
        return True

    def save_fotoMascota(self, fotoMascota):
        sql = '''
            INSERT INTO foto_mascota (ruta_archivo, nombre_archivo, mascota_domicilio_id)
            VALUES (%s, %s, %s);
            '''
        self.cursor.execute(sql, fotoMascota)
        self.db.commit()

    def get_comunaId(self, comuna):
        sql = "SELECT id FROM comuna WHERE nombre LIKE '%" + comuna + "%';"
        self.cursor.execute(sql)
        data = self.cursor.fetchall()
        return str(data[0][0])


    def get_mascotaId(self, mascota, otraMascota):
        if mascota == 'otro':
            try:
                insert = '''
                INSERT INTO tipo_mascota (nombre) 
                VALUES (%s);
                '''
                self.cursor.execute(insert, (otraMascota, ))
                self.db.commit()
                print(self.cursor.rowcount, "Record inserted successfully into tipo_mascota table")
                sql = "SELECT id FROM tipo_mascota WHERE nombre LIKE  '%" + otraMascota + "%';"
                self.cursor.execute(sql)
                data = self.cursor.fetchall()
                return str(data[0][0])
            except mysql.connector.Error as error:
                print("Failed to insert record into MySQL table {}".format(error))

        else:
            sql = "SELECT id FROM tipo_mascota WHERE nombre LIKE '%" + mascota + "%';"
            self.cursor.execute(sql)
            data = self.cursor.fetchall()
            return str(data[0][0])

    def respToInt(self, resp):
        if resp == "no":
            return 0
        if resp == "si":
            return 1
        if resp == "noAplica":
            return 2
        else:
            return -1

    def getLastTableID(self, table):
        sql = "SELECT id FROM " + table
        self.cursor.execute(sql)
        data = self.cursor.fetchall()
        return str(data[-1][0])







