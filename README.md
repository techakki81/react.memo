# React.Memo 

Memoisation is a technique wherein the language or platform rememebers the output of a pure function based on input params. 

Idea is simple, if the Function is pure, has the same params then the output will always be same. If so, then why compute again and again. So, when we memoise anything, engine puts the output in some sort of a cache . As long as parameters do not change, the engine will return this stored valued from cache whenever function is called and not execute the function at all...hence saving time and processing . 

React.Memo appleis this concept to React components...after all React Components are nothing but functions in programming terms 

#demo 
1. Intro: memo 
2. Maths calculation
3. Proj Exp
4. Demo 
5. Why not Wrap everthing by default with Memo 
    1. FB does not do it by defauly 
    2. Comparison of object is costly
6. make first version without it and then check with profiler. use React.Memo only if   it bring value via profiler
