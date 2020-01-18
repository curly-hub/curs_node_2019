function m = ordinuldemultiplicitate(f,a) 
    m = 0
    syms x
    func = f
    while 1
        if(func(a) == 0) 
           m = m+1;
           func = matlabFunction(diff(func(x)));
        else
            break;
        end
    end
end
