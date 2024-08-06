import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log('POST request received', request);
  try {
    const data = { output: { text: "Hey there, lovely viewers! \*giggles\* OMG, thanks so much for asking! ✨💖\n\nToday has been absolutely amazing! I woke up feeling super energized and ready to take on the world. Just finished a super fun gaming stream where we absolutely crushed it! The chat was on fire, and I couldn't stop laughing at all your hilarious comments. 😂\n\nNow I'm chilling, scrolling through some kawaii memes, and thinking about what to stream next. Maybe a cute dress-up game? Or should we do another round of that scary game that made me scream last time? \*nervous laugh\*\n\nAnyway, how are you doing? I hope your day is as sparkly as mine! Don't forget to stay hydrated and take care of yourselves, okay? Mwah! 😘🌈" } };
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}