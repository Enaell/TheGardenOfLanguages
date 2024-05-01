export type Language = 'Fr' | 'En' | 'Cn';

export type Visibility = 'visitor' | 'loggedin' | 'owner';

export type Level = { language: Language, rank: number }

export type Role = 'Admin' | 'Customer' | 'Moderator' | 'Visitor';