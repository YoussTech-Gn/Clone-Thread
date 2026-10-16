import { ThreadType, User } from "@/types/types";
import { faker } from "@faker-js/faker";

// مستخدم بسيط بدون followers (للردود والـ mentions)
export const createRandomFollowers = (): User => ({
  id: faker.string.uuid(),
  link: faker.internet.url(),
  name: `${faker.person.firstName()} ${faker.person.lastName()}`,
  username: faker.internet.username(),
  verified: Math.random() >= 0.5,
  avatar: faker.image.avatar(),
  bio: faker.person.bio(),
});

// مستخدم كامل: عدد followers صغير (حتى 19) بدل 99
export const createRandomUser = (): User => ({
  ...createRandomFollowers(),
  followers: Array.from(
    { length: Math.floor(Math.random() * 20) },
    createRandomFollowers,
  ),
});

export const createRandomThread = (): ThreadType => {
  // الردود أولاً، حتى يكون repliesCount مطابقاً دائماً لـ replies.length
  const replies = Array.from(
    { length: Math.floor(Math.random() * 10) },
    () => ({
      author: createRandomFollowers(), // بدون followers
      content: faker.lorem.sentence(),
      createdAt: faker.date.recent().toISOString(),
      id: faker.string.uuid(),
      likes: Math.floor(Math.random() * 2000),
    }),
  );

  return {
    author: createRandomUser(),
    mentionUser: createRandomFollowers(),
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent().toISOString(),
    id: faker.string.uuid(),
    likesCount: Math.floor(Math.random() * 1000),
    repliesCount: replies.length,
    sharedCount: Math.floor(Math.random() * 500),
    image: Math.random() >= 0.5 ? faker.image.url() : undefined,
    mention: Math.random() > 0.5,
    replies,
  };
};
