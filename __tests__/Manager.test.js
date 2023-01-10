const Manager = require('../lib/Manager')

test('test adding id to manager', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.id).toBe(1);
  });

  test('test adding name to manager', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.name).toBe('Anna');
  });

  test('test adding email to manager', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.email).toBe('annaperlack@gmail.com');
  });

  test('test adding github id to manager', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com', '8658984400')
    expect(person.officeNumber).toBe('8658984400');
  });

  test('test adding getid method returns id', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getid method returns id', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getid method returns id', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getname method returns name', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getname()).toBe('Anna');
  });

  test('test adding getemail method returns email', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getemail()).toBe('annaperlack@gmail.com');
  });

  test('test adding getofficeNumber method returns office number', () => {
    const person = new Manager(1, 'Anna', 'annaperlack@gmail.com', '8658984400')
    expect(person.getofficeNumber()).toBe('8658984400');
  });