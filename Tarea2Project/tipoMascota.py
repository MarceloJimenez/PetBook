import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(host='localhost',
                                         database='cc500235_db',
                                         user='root',
                                         password='')

    mySql_insert_query = """INSERT INTO tipo_mascota (nombre)
                           VALUES (%s) """

    records_to_insert = [('Perro',),
                         ('Gato',),
                         ('Pez',),
                         ('Tortuga',),
                         ('Hámster',),
                         ('Loro',),
                         ('Iguana',),
                         ('araña',)]

    cursor = connection.cursor()
    cursor.executemany(mySql_insert_query, records_to_insert)
    connection.commit()
    print(cursor.rowcount, "Record inserted successfully into tipo_mascota table")

except mysql.connector.Error as error:
    print("Failed to insert record into MySQL table {}".format(error))

finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")
