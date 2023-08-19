import { of, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/debounce

//emit four strings
const example = of('WAIT', 'ONE', 'SECOND', 'THIRD', 'Last will display');
/*
    Only emit values after a second has passed between the last emission,
    throw away all other values
*/
const debouncedExample = example.pipe(debounce(() => timer(5000)));
/*
    In this example, all values but the last will be omitted
    output: 'Last will display'
*/
const subscribe = debouncedExample.subscribe((val) => console.log(val));
