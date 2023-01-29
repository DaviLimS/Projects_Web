class into:
    def SimpleVariable():
        a = int(42);
        b = float(3.147);

        c = bool(True);
        d = bool(False);

        e = str('Hello, World!');

        if(c == True):
            f = a + b;
            print(e + ' E a soma é {}'.format(f));

    def SearchVariable():
        a = input('coloca alguma coisa aki pls'); #Todo input é str

        print(type(a)); #Tipo da variavel (a)
        print(a.isspace()) #se perguta se (a) é somente espaços 
        print(a.isnumeric()) #se pergunta se (a) é númerico 
        print(a.isalpha()); #é alfabético??
        print(a.isalnum()); #é alfa numerico??
        print(a.isdecimal); #é decimal?? 
        print(a.isupper()); #é maiúsculo??
        print(a.islower()); #é minúsculo??
        print(a.title()); #é capitalizada

    SimpleVariable(); 