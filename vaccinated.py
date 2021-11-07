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


def vaccinated_with(num_vaccines):
    '''
    MATCH (a:Person), (v:Vaccine) WHERE a.cf = '1' and v.type = 'Pfizer'  
    CREATE (a) - [r:VACCINATED_WITH] -> (v)
    '''
    persons = read_csv('csv/people.csv')
    vaccines = read_csv('csv/vaccines.csv')
    f = open('rel/vaccinated.txt', 'w')

    for i in range(num_vaccines):
        cf = random.choice(persons)[3]
        id = random.choice(vaccines)[0]
        s = "MATCH (a:Person{cf:'" + cf +"'}), (b:Vaccine{id:'" + id + "'}) CREATE (a)-[:VACCINATED_WITH]->(b);\n"
        f.write(s)

vaccinated_with(600)
