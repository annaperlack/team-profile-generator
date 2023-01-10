const Employee = require('../lib/Employee')

test('test adding id to employee', () => {
    const person = new Employee(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.id).toBe(1);
  });

  test('test adding name to employee', () => {
    const person = new Employee(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.name).toBe('Anna');
  });

  test('test adding email to employee', () => {
    const person = new Employee(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.email).toBe('annaperlack@gmail.com');
  });

  test('test adding getid method returns id', () => {
    const person = new Employee(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });