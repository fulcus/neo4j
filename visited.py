# importing csv module
import csv
import random

 
def read_csv(filename):
    # initializing the titles and rows list
    fields = []
    rows = []

    # reading csv file
    with open(filename, 'r') as csvfile:
        # creating a csv reader object
        csvreader = csv.reader(csvfile)
        
        # extracting field names through first row
        fields = next(csvreader)

        # extracting each data row one by one
        for row in csvreader:
            rows.append(row)

        # get total number of rows
        print("Total no. of rows: %d"%(csvreader.line_num))

    # printing the field names
    print('Field names are:' + ', '.join(field for field in fields) + '\n')
    return rows

# Field names are: 0: first_name, 1: last_name, 2: email, 3: cf


# todo: format date properly, check same person not in same place at near times
def visited(num_visits):
    '''
    MATCH (a:Person), (p:Place) WHERE a.cf = '1' and p.id = '1' 
    CREATE (a)-[r: VISITED {date: datetime('2015-06-24T12:50:35.556+0100')}]->(p)
    '''
    persons = read_csv('csv/people.csv')
    places = read_csv('csv/places.csv')
    f = open('rel/visited.txt', 'w')

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
        s = f'MATCH (a:Person), (p:Place) WHERE a.cf = {cf} and p.id = {place}  CREATE (a)-[r: VISITED {{"datetime": "{random_dates[i]}"}}]->(p)\n'
        f.write(s)

visited(10)