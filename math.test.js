const {divide,multiply,subtract,sum}= require ("./math");


describe("Math", ()=>{
it ("should sum 2+2 to be 4", ()=>{
    const result = sum(2,2);
    expect(result).toBe(4);
    expect (result).toBeGreaterThan(3);
});

it("Should multiply 3*3 to result to 9", ()=>{
    const result = multiply(3, 3);
    expect(result).not.toBe(8);
});

it ("Should subtract 4-2 to result to 2", ()=>{
    const result = subtract(4,2);
    expect (result).not.toBe(7);
    expect (result).toBe(2);
})
it ("Should divide 4/2 to result to 2", ()=>{
    const result = divide(4,2);
    expect (result).not.toBe(7);
    expect (result).toBe(2);
})
});

it("should be falsy", ()=>{
    expect(undefined).toBeFalsy(); 
});

test("Array", ()=>{
    let days = ["Monday","Tuesday", "Wednesday"];
    expect(days).toContain("Tuesday");
    expect(days).not.toContain("Friday");
});

