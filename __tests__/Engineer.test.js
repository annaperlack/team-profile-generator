const Engineer = require('../lib/Engineer')

test('test adding id to engineer', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.id).toBe(1);
  });

  test('test adding name to engineer', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.name).toBe('Anna');
  });

  test('test adding email to engineer', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.email).toBe('annaperlack@gmail.com');
  });

  test('test adding github id to engineer', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com', 'annaperlack')
    expect(person.github).toBe('annaperlack');
  });

  test('test adding getid method returns id', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getid method returns id', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getname method returns name', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getname()).toBe('Anna');
  });

  test('test adding getemail method returns email', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getemail()).toBe('annaperlack@gmail.com');
  });

  test('test adding getgithub method returns github username', () => {
    const person = new Engineer(1, 'Anna', 'annaperlack@gmail.com', 'annaperlack')
    expect(person.getgithub()).toBe('annaperlack');
  });