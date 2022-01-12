import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """
    this method will create a database connection to the SQLite database that
    is passed as the argument db_file
    :param db_file: database file 
    :return: returns the Connection object if exists, else returns None 
    """
    connec = None 
    try: 
        connec = sqlite3.connect(db_file)
        return connec
    except Error as e:
        print(e)

    return connec

def create_table(connec, sqlcode_table):
    """ 
    this method will create a table from the sqlcode_table statement 
    :param connec: Connection object to the database
    :return: 
    """
    try: 
        c=connec.cursor()
        c.execute(sqlcode_table)
    except Error as e:
        print(e)

def main():
    database=r"../db/pythonsqlite.db"

    sql_depttable = """ CREATE TABLE IF NOT EXISTS Department(
                                id integer PRIMARY KEY ,
                                name text
    ); """

    sql_employeetable = """ CREATE TABLE IF NOT EXISTS Employee(
                                id integer PRIMARY KEY ,
                                name text,
                                department_id integer,
                                FOREIGN KEY (department_id) REFERENCES Department (id)
    ); """

    sql_salarytable = """ CREATE TABLE IF NOT EXISTS Salary(
                                salary integer,
                                employee_id integer,
                                FOREIGN KEY (employee_id) REFERENCES Employee (id)
    ); """

    connec = create_connection(database)

    if connec is not None:
        create_table(connec, sql_depttable)
        create_table(connec, sql_employeetable)
        create_table(connec, sql_salarytable)
    else:
        print("Error: database connection cannot be created")

    
if __name__ == '__main__':
    main()
