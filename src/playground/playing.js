class WorkingOnIt {
  name = "Omar";
  lastName = "Vega";
  travel = true;
  journey = () => {
    fullName = `${this.name}${this.lastName}`;
    return `${fullName} started his ${travel} journey`;
  };
}

// const omar = new WorkingOnIt();

let log = new WorkingOnIt();
console.log(log.journey());
