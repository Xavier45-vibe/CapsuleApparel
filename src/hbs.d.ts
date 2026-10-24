declare module 'hbs' {
  const hbs: {
    registerPartials(directory: string, done?: (err?: Error) => void): void;
    registerPartial(name: string, partial: string): void;
    registerHelper(name: string, helper: (...args: any[]) => any): void;
  };
  export default hbs;
}
