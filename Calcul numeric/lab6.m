A = [3 1 1; 1 3 1; 1 1 3];
b = [1;2;3]
epsi = 10^-4;

cond(A) % conditionalul
x1 = A\b % aici e A*x1 = b

norm(A,1)
eigs(A)
JacobiDeAprox(A,epsi)

%Test1
%bisectie
%newton rhapson  +grafic
%secanta
%poz falsa 
%60 min

%sisteme de gauss simplu/partial/total
%rangul matrici

%factorizare LU Ceholosky
% [L,U,w] = fact LU(A)
%y = subsAsc(L,b(w))
%x = subsDesc(U,y)
%Val Proprii Iacobi