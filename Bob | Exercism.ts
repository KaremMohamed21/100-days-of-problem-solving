export function hey(message: string): string {
  switch (true) {
    case message.trim() === '':
      return 'Fine. Be that way!';
    case message.endsWith('?') && message == message.toUpperCase() && message.search(/^[0-9]/) == -1:
      return "Calm down, I know what I'm doing!";
    case message.trim().endsWith('?'):
      return 'Sure.';
    case message.endsWith('!') && message == message.toUpperCase():
    case message == message.toUpperCase() && message.search(/^[0-9]/) == -1:
      return 'Whoa, chill out!';
    default:
      return 'Whatever.';
  }
}
