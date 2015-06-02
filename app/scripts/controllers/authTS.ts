interface IUser {
	email: string;
	password: string;
	username: string;
	createdAt: number;
	lastLogin: number;
}

class User {
	constructor(user: IUser) {
	}
}

