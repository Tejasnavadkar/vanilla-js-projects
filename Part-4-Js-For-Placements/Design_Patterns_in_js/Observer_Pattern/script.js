// Oberver pattern (basic pub-sub)

class YoutubeChannel {
    
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
    user.update(`${user.name}, You have subscribed the channel.`);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`You have un-subscribed the channel.`);
  }
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(message));
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name}, ${data}`);
  }
}

let sheryians = new YoutubeChannel();
let user1 = new User("Harsh");
let user2 = new User("Amit");
sheryians.subscribe(user1);
sheryians.subscribe(user2);
sheryians.notify("new video is live on the channel..");
