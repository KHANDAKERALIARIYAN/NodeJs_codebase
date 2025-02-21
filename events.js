import {EventEmitter} from 'events';

const myEmitter=new EventEmitter();

function greetHandler(name){
    console.log(`Hello ${name}`);
}

function goodbyeHandler(name){
    console.log(`Goodbye ${name}`);
}

// Register event listener
myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);

// Emit event
myEmitter.emit('greet','Ariyan');
myEmitter.emit('goodbye','Ariyan');

// Error Handling
myEmitter.on('error', (err) => {
    console.log(err);
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));