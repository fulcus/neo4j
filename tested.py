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


def tested_with(num_tests):
    '''
    MATCH (a:Person), (t:Test) WHERE a.cf = '1' and t.id = '1'  
    CREATE (a)-[r:TESTED_WITH] -> (t)
    '''
    persons = read_csv('csv/people.csv')
    tests = read_csv('csv/tests.csv')
    f = open('rel/tested.txt', 'w')

    for i in range(num_tests):
        cf = random.choice(persons)[3]
        id = random.choice(tests)[0]
        s = f'CREATE (:Person{{cf: {cf}}})-[TESTED_WITH]-> (:Test{{id: {id}}})\n'
        f.write(s)

tested_with(10)