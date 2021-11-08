import os
import random
from utils import read_csv


# todo: format date properly, check same person not in same place at near times
def visited(num_visits):
    '''
    MATCH (a:Person), (p:Place) WHERE a.cf = '1' and p.id = '1' 
    CREATE (a)-[r: VISITED {date: datetime('2015-06-24T12:50:35.556+0100')}]->(p)
    '''
    persons = read_csv(os.getcwd() + '/csv/people.csv')
    places = read_csv(os.getcwd() + '/csv/places.csv')
    f = open(os.getcwd() + '/rel/visited.txt', 'w')

    # randomly sample datetime
    import datetime
    from datetime import timedelta
    # datetime('2015-06-24T12:50:35.556+0100')
    start_date = datetime.datetime.strptime('2020-03-01T00:00:00Z', "%Y-%m-%dT%H:%M:%SZ")
    end_date = datetime.datetime.strptime('2021-10-01T00:00:00Z', "%Y-%m-%dT%H:%M:%SZ")
    random_dates = [start_date + timedelta(days=random.random() * (end_date - start_date).days) for _ in range(num_visits)]

    for i in range(num_visits):
        cf = random.choice(persons)[3]
        place = random.choice(places)[0]
        s ="MATCH (a:Person{cf:'"+cf+"'}), (p:Place{id:'"+place+"'}) CREATE (a)-[:VISITED{datetime: '"+ str(random_dates[i])+"'}]->(b);\n"
        f.write(s)

visited(1000)
