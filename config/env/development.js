'use strict';

module.exports = {
	db: process.env.DB_URI || 'mongodb://mongodb:27017/cyphor-dev',
	app: {
		title: 'Cyphor - Development Environment'
	},
	port : 3001,
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '990535244072-rsvqjtcme134k601uafpd7dgjepims55.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'ov2aSIv0DOHFW7GZ__6g5-a1',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			baseURL : 'https://us13.api.mailchimp.com/3.0/',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD',
				apikey: '1d40c84b0e283812f15ef67b4fcaf645-us13'
			}
		},
		lists: {
			beta : '4fa54016d4',
			test : '12a516a5f0'
		}
	}
};
