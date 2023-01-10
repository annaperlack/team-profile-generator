const Intern = require('../lib/Intern')

test('test adding id to intern', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.id).toBe(1);
  });

  test('test adding name to intern', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.name).toBe('Anna');
  });

  test('test adding email to intern', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.email).toBe('annaperlack@gmail.com');
  });

  test('test adding school id to intern', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com','UT')
    expect(person.school).toBe('UT');
  });

  test('test adding getid method returns id', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getid method returns id', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getid()).toBe(1);
  });

  test('test adding getname method returns name', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getname()).toBe('Anna');
  });

  test('test adding getemail method returns email', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com')
    expect(person.getemail()).toBe('annaperlack@gmail.com');
  });

  test('test adding getschool method returns school', () => {
    const person = new Intern(1, 'Anna', 'annaperlack@gmail.com', 'UT')
    expect(person.getschool()).toBe('UT');
  });