FROM python:latest

WORKDIR /app

# Install git if needed for pip requirements
RUN apt-get update && apt-get install -y git

COPY requirements.txt ./
RUN pip install flask flask-cors flask_pymongo python-dotenv pymongo  

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]