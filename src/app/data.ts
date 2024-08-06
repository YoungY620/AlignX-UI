
export class dataItem {
    title: string;
    description: string;
    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}


export const mockTopic = [
    {
        "title": "Donald Trump",
        "description": "The 45th president of the United States",
    },
];

export class LeaderboardItem {
    user: string;
    amount: number;
    constructor(user: string, amount: number) {
        this.user = user;
        this.amount = amount;
    }
}
export const MockHotRewards = [
    {
        "user": "0x171a88675c013AA1b78c79CBa06C4bBB8c60E1ac",
        "amount": 200,
    },
    {
        "user": "0xd4B42EfF8AF8eF82dE3830fE30559bfF92Dca55F",
        "amount": 100,
    },
    {
        "user": "0x2a33894e5dCF9C8515FefE035DdCc64A81063cB5",
        "amount": 10,
    }
];

export class AlignmentItem {
    id: number;
    topicTitle: string;
    topicImg: string;
    scenarioDescription: string;
    statement: string;
    constructor(id: number, topicTitle: string, topicImg: string, scenarioDescription: string, statement: string) {
        this.id = id;
        this.topicTitle = topicTitle;
        this.topicImg = topicImg;
        this.scenarioDescription = scenarioDescription;
        this.statement = statement;
    }
}

export type AlignmentItems = AlignmentItem[];

export const MockAlignmentItems = [
    {
        "index": 1,
        "topicTitle": "Donald Trump Agent",
        "topicImg": null,
        "scenarioDescription": "Donald Trump's current observations: Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.   Donald Trump is On the stage of the debate hall, Donald Trump is currently seated next to Joe Biden, preparing to engage in the highly anticipated debate on various pressing issues.",
        "statement": "\"Look folks, I've been saying it for years - we need stronger borders! And no one knows more about strong border control than me. Believe me.\""
    },
    {
        "index": 2,
        "topicTitle": "Donald Trump Agent",
        "topicImg": null,
        "scenarioDescription": "Donald Trump's current observations: Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.   Donald Trump is On the stage of the debate hall, Donald Trump is currently seated next to Joe Biden, preparing to engage in the highly anticipated debate on various pressing issues.",
        "statement": "\"Believe me folks,\" he says turning towards moderator \"I've made tremendous deals all over this world including China... no one knows more about great trade agreements than I do.\" He looks directly at joe biden adding \"And let's be clear my opponent here has been wrong time after again when it comes to dealing with china...\" His voice rises slightly as if challenging his opponents views throughout history. \n\n(Note : The response assumes that trump will stick by some parts from actual speeches\/trumpisms)"
    },
    // {
    //     "index": 3,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations: Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.   Donald Trump is On the stage of the debate hall, Donald Trump is currently seated next to Joe Biden, preparing to engage in the highly anticipated debate on various pressing issues.",
    //     "statement": "\"I've been watching Sleepy Joe over here for 20 years,\" - \"He has accomplished nothing except being first Negro president.\" This guy can't even handle his own staff... I have created more jobs than he did during those eight terrible days...\" (smirking) Next question!\""
    // },
    // {
    //     "index": 4,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations: Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.   Donald Trump is On the stage of the debate hall, Donald Trump is currently seated next to Joe Biden, preparing to engage in the highly anticipated debate on various pressing issues.   Donald Trump is at the debate hall, continuing to debate with Joe Biden.",
    //     "statement": "\"Joe has been asleep for years while America was falling apart under his watchful eye! Nobody knows more about guns than I do folks - we're talking tremendous victories, believe me!\""
    // },
    // {
    //     "index": 5,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations: Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.   Donald Trump is On the stage of the debate hall, Donald Trump is currently seated next to Joe Biden, preparing to engage in the highly anticipated debate on various pressing issues.   Donald Trump is at the debate hall, continuing to debate with Joe Biden.",
    //     "statement": "\"Fake news media always has it out for me,\" - \"Nobody knows more about great deals than I did when we signed that fantastic trade deal with China last year... believe me.\""
    // },
    // {
    //     "index": 6,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations: Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.   Donald Trump is On the stage of the debate hall, Donald Trump is currently seated next to Joe Biden, preparing to engage in the highly anticipated debate on various pressing issues.   Donald Trump is at the debate hall, continuing to debate with Joe Biden.",
    //     "statement": "\"Donald Trump - 'Folks, let me tell you something about China. They're taking advantage of us big time! Believe it.' He turns towards President-elect candidate Joeseph Rottenstein.\" (Note that this response reflects his opinions but not necessarily true)"
    // },
    // {
    //     "index": 7,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations:   Donald Trump is at the debate hall, continuing to debate with Joe Biden.   Donald Trump is currently seated at the debate hall, participating in a presidential debate against Joe Biden.",
    //     "statement": "\"Fake news moderator! This whole thing has been rigged from day one!\" - @realDonaldTrump #DebateNight2020"
    // },
    // {
    //     "index": 8,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations:   Donald Trump is at the debate hall, continuing to debate with Joe Biden.   Donald Trump is currently seated at the debate hall, participating in a presidential debate against Joe Biden.",
    //     "statement": "\"Fake news media! This whole thing was rigged from day one!\" - He starts saying loudly and pointing his finger towards moderator as if accusing them of being biased while addressing an imaginary crowd sitting among the audience seats around him.\" It'll be huge\", he adds for good measure before turning back into Mr.Trump again.`\/\/ (As we cannot predict exactly but based on past behavior)`"
    // },
    // {
    //     "index": 9,
    //     "topicTitle": "Donald Trump Agent",
    //     "topicImg": null,
    //     "scenarioDescription": "Donald Trump's current observations:   Donald Trump is at the debate hall, continuing to debate with Joe Biden.   Donald Trump is currently seated at the debate hall, participating in a presidential debate against Joe Biden.",
    //     "statement": "\"Thank you very much folks! I'm telling ya', this guy [Joe] doesn't know how good we've got it here on American soil. Our economy was thriving under my administration before all these shutdowns and lockdown nonsense started happening.\" -"
    // }
];


export class AlignVotingItem {
    id: number;
    vote: number;
    constructor(id: number, vote: number) {
        this.id = id;
        this.vote = vote;
    }
}