#!C:\Users\marce\AppData\Local\Programs\Python\Python38\python.exe


import cgi
import cgitb
import datetime
import os
import sys
from io import TextIOWrapper
from dbManage import tarea2db

cgitb.enable(display=0, logdir='.')  # mostrar los erroes en un archivo html
sys.stdout = TextIOWrapper(sys.stdout.buffer.detach(), encoding='utf8')

print("Content-type: text/html\r\n\r\n")


form = cgi.FieldStorage()
t2db = tarea2db()

date = datetime.datetime.now()
comunaID = t2db.get_comunaId(form['comuna'].value)
mascotaID = t2db.get_mascotaId(form['tipo-mascota'].value, form['otra-mascota'].value)
esterilizado = t2db.respToInt(form['esterilizado-mascota'].value)
vacunas = t2db.respToInt(form['vacunas-mascota'].value)

domicilio = (
    date.strftime("%x"), comunaID, form['calle'].value, form['numero'].value, form['sector'].value,
    form['nombre'].value,
    form['email'].value, form['celular'].value
)
t2db.save_domicilio(domicilio)

domicilioID = t2db.getLastTableID("domicilio")

mascotaDomicilio = (
    mascotaID, form['edad-mascota'].value, form['color-mascota'].value, form['raza-mascota'].value,
    esterilizado, vacunas, domicilioID
)
t2db.save_mascotaDomicilio(mascotaDomicilio)
mascotaDomicilioID = t2db.getLastTableID("mascota_domicilio")
filename = ''
save_path = '/petPhotos/'
if len(form) > 0:
    foto = form['foto-mascota']  # binario de la archivo recibido
    filename = foto.filename  # nombre del archivo

    if '.jpg' or '.png' in filename:  # validacion formatos permitidos
        completeName = os.path.join(save_path, filename)
        fn = os.path.basename(filename)  # obtener nombre base del archivo
        open(fn, 'wb').write(foto.file.read())  # guarda archivo en el servidor
        fotoMascota = (
            completeName, filename, mascotaDomicilioID
        )
        t2db.save_fotoMascota(fotoMascota)

html = '''
<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/estilo.css">
        <script src="js/Utils.js"></script>
        <script src="js/validador.js"></script>
        <title>Tarea 2</title>
    </head>
    <body>  
        <h1>Envío de Formulario</h1
        <div id="container">     
                Su información se guardo con exito!!   
        </div>    
    </body>
</html>
'''
print(html)
# else:
#     html = '''
#     <!DOCTYPE html>
#         <head>
#             <meta charset="utf-8">
#             <link rel="stylesheet" href="css/estilo.css">
#             <script src="js/Utils.js"></script>
#             <script src="js/validador.js"></script>
#             <title>Tarea 2</title>
#         </head>
#         <body>
#             <h1>Envío de Formulario</h1
#             <div id="container">
#                     Error al guardar su información
#             </div>
#         </body>
#     </html>
#     '''
#     print(html)
