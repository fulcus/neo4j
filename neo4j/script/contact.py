import os
import random
from utils import read_csv

def contact_with():
    '''
    MATCH (a:Person), (b:Person) WHERE a.cf != b.cf and a.cf = '1' and b.cf = '2' 
    CREATE (a)-[r: CONTACT_WITH]->(b)
    '''
    f = open(os.getcwd() + '/rel/contact_with.txt', 'w')
    persons = read_csv(os.getcwd() + '/csv/people.csv')

    contact_num = 1000
    num = 1 


    import datetime
    from datetime import timedelta
    # datetime('2015-06-24T12:50:35.556+0100')
    start_date = datetime.datetime.strptime('2020-03-01T00:00:00Z', "%Y-%m-%dT%H:%M:%SZ")
    end_date = datetime.datetime.strptime('2021-11-01T00:00:00Z', "%Y-%m-%dT%H:%M:%SZ")


    while (num < contact_num):
        randomNumber1 = random.randint(2, 301)
        randomNumber2 = random.randint(2, 301)

        randomX = random.uniform(-90.00000, 90.00000)
        randomY = random.uniform(-180.00000, 180.00000)

        if randomNumber1 != randomNumber2:
            random_date = start_date + timedelta(days=random.random() * (end_date - start_date).days) 
            date = random_date.strftime("%Y-%m-%d")
            time = random_date.strftime("%H:%M:%S")

            s = "MATCH (a:Person{cf:'" + persons[randomNumber1][3] + "'}), (b:Person{cf:'" + persons[randomNumber2][3] + "'}) CREATE (a)-[:CONTACT_WITH{date: datetime('" + date + "T"+time+"'), coord: point({x: "+ str(randomX) +", y: " + str(randomY) +"})}]->(b) WITH true as pass\n"
            #, coord: point({x:" + + 56.7, y: 12.78, crs: 'wgs-84'"})}]->(b)\n"
            f.write(s)
            num = num+1
    

    randomNumber1 = random.randint(2, 301)
    randomNumber2 = random.randint(2, 301)

    randomX = random.uniform(-90.00000, 90.00000)
    randomY = random.uniform(-180.00000, 180.00000)

    if randomNumber1 != randomNumber2:
        random_date = start_date + timedelta(days=random.random() * (end_date - start_date).days) 
        date = random_date.strftime("%Y-%m-%d")
        time = random_date.strftime("%H:%M:%S")
        s = "MATCH (a:Person{cf:'" + persons[randomNumber1][3] + "'}), (b:Person{cf:'" + persons[randomNumber2][3] + "'}) CREATE (a)-[:CONTACT_WITH{date: datetime('" + date + "T"+time+"'), coord: point({x: "+ str(randomX) +", y: " + str(randomY) +"})}]->(b);\n"
        f.write(s)


contact_with()






