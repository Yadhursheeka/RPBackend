from fastapi import FastAPI, UploadFile, File

from image_processing.tesseract import imgToText

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/imageToText")
def root(file: UploadFile = File(...)):
    result = imgToText(file.file)
    return {"text": result}
