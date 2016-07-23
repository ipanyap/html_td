var Stage = [
	{ //stage 1
		row : 13,
		col : 20,
		paths : [
			[5, -1], [5, 0], [5, 1], [4, 1], [3, 1], [3, 2], [3, 3], [4, 3], [4, 4],
			[5, 4], [6, 4], [6, 5], [6, 6], [7, 6], [8, 6], [8, 7], [8, 8], [8, 9],
			[8, 10], [7, 10], [6, 10], [6, 11], [6, 12], [7, 12], [8, 12], [9, 12],
			[10, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12],
			[15, 11], [16, 11], [17, 11], [17, 10], [17, 9], [17, 8], [16, 8], [15, 8],
			[14, 8], [14, 7], [14, 6], [14, 5], [14, 4], [15, 4], [16, 4], [17, 4]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 5 }
			],
			[
				{ enemy: Quadrone, amount: 15 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 2 }
			],
			[
				{ enemy: Quadrone, amount: 15 },
				{ enemy: Hovercraft, amount: 5 }
			],
			[
				{ enemy: Hovercraft, amount: 15 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Quadrone, amount: 15 },
				{ enemy: Hovercraft, amount: 15 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 20 },
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: Quadrone, amount: 20 },
				{ enemy: Hovercraft, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 30 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 5 }
			]
		],
		fund : 200,
		health : 10,
		base : [18, 4]
	},
	{ //stage 2
		row : 16,
		col : 20,
		paths : [
			[-1, 4], [0, 4], [1, 4], [1, 5], [2, 5], [3, 5], [3, 6],
			[3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12],
			[4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [8, 11],
			[8, 10], [8, 9], [7, 9], [7, 8], [7, 7], [7, 6],
			[7, 5], [7, 4], [6, 4], [5, 4], [5, 3], [5, 2],
			[5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
			[11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1],
			[17, 1], [18, 1], [18, 2], [18, 3], [18, 4], [18, 5],
			[18, 6], [17, 6], [16, 6], [15, 6], [14, 6], [13, 6],
			[13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [14, 11],
			[15, 11], [16, 11], [17, 11]//, [18, 11], [19, 11], [20, 11]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 8 },
				{ enemy: Hovercraft, amount: 5 }
			],
			[
				{ enemy: Quadrone, amount: 5 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 3 }
			],
			[
				{ enemy: Hovercraft, amount : 7 },
				{ enemy: SteelTank, amount: 4 },
				{ enemy: Quadrone, amount: 5 }
			]
		],
		fund : 300,
		health : 10,
		base : [18, 11]
	},
	{ //stage 3
		row : 18,
		col : 20,
		paths : [
			[-1, 6], [0, 6], [1, 6], [2, 6], [2, 5], [2, 4], [2, 3], [2, 2],
			[3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [9, 3],
			[10, 3], [11, 3], [11, 4], [11, 5], [11, 6], [12, 6], [13, 6], [14, 6],
			[14, 7], [14, 8], [14, 9], [14, 10], [14, 11], [13, 11], [12, 11],
			[11, 11], [11, 12], [11, 13], [11, 14], [10, 14], [9, 14], [9, 15],
			[8, 15], [7, 15], [6, 15], [5, 15], [4, 15], [3, 15], [2, 15], [2, 14],
			[2, 13], [2, 12], [2, 11]//, [1, 11], [0, 11], [-1, 11]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: SteelTank, amount : 5 },
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 3 }
			],
			[
				{ enemy: SteelTank, amount : 10 },
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 3 }
			],
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			]
		],
		fund : 300,
		health : 10,
		base : [2, 10]
	},
	{ //stage 4
		row : 15,
		col : 22,
		paths : [
			[-1, 12], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [4, 11], [4, 10], [4, 9],
			[4, 8], [5, 8], [6, 8], [7, 8], [7, 7], [7, 6], [7, 5], [7, 4], [7, 3], [7, 2],
			[8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2],
			[17, 2], [18, 2], [18, 3], [18, 4], [18, 5], [18, 6], [18, 7], [17, 7], [16, 7],
			[15, 7], [15, 8], [15, 9], [15, 10], [14, 10], [13, 10], [13, 11], [13, 12]//, [13, 13],
			//[13, 14], [13, 15]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 3 },
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 3 },
				{ enemy: SteelTank, amount : 3 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 3 }
			]
		],
		fund : 300,
		health : 10,
		base : [13, 13]
	},
	{ //stage 5
		row : 19,
		col : 20,
		paths : [
			[-1, 17], [0, 17], [1, 17], [2, 17], [2, 16], [2, 15], [2, 14], [2, 13], [3, 13],
			[4, 13], [5, 13], [5, 14], [5, 15], [5, 16], [5, 17], [6, 17], [7, 17], [8, 17],
			[8, 16], [8, 15], [8, 14], [8, 13], [8, 12], [8, 11], [8, 10], [8, 9], [8, 8], [8, 7],
			[8, 6], [8, 5], [8, 4], [8, 3], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2],
			[14, 2], [15, 2], [16, 2], [16, 3], [16, 4], [16, 5], [16, 6], [16, 7], [16, 8], [16, 9],
			[17, 9]//, [18, 9], [19, 9], [20, 9]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 4 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 5 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: MagmaTank, amount : 3 }
			],
			[
				{ enemy: SteelTank, amount : 4 },
				{ enemy: EagleJet, amount : 4 },
				{ enemy: MagmaTank, amount : 4},
				{ enemy: SonicRocket, amount : 4 }
			]
		],
		fund : 400,
		health : 10,
		base : [18, 9]
	},
	{ //stage 6
		row : 13,
		col : 20,
		paths : [
			[2, 13], [2, 12], [2, 11], [2, 10], [2, 9], [2, 8], [3, 8], [4, 8], [5, 8], [5, 7],
			[5, 6], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
			[10, 1], [11, 1], [11, 2], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3],
			[17, 3], [17, 4], [17, 5], [17, 6], [17, 7], [17, 8], [17, 9], [16, 9], [15, 9],
			[14, 9], [13, 9], [12, 9], [12, 10]//, [12, 11], [12, 12], [12, 13]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 10 },
				{ enemy: EagleJet, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 8 },
				{ enemy: MagmaTank, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 10 },
				{ enemy: SonicRocket, amount : 8 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 5 },
				{ enemy: Phantom, amount : 5 }
			]
		],
		fund : 400,
		health : 10,
		base : [12, 11]
	},
	{ //stage 7
		row : 13,
		col : 20,
		paths : [
			[-1, 12], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [4, 11], [4, 10], [4, 9], [4, 8],
			[4, 7], [3, 7], [3, 6], [3, 5], [3, 4], [3, 3], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
			[8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7],
			[12, 6], [12, 5], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4],
			[18, 5], [18, 6]//, [18, 7], [19, 7], [20, 7]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 5 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: SonicRocket, amount : 5 }
			],
			[
				{ enemy: SonicRocket, amount : 5 },
				{ enemy: MagmaTank, amount : 5 }
			],
			[
				{ enemy: MagmaTank, amount : 5 },
				{ enemy: Phantom, amount : 5 }
			]
		],
		fund : 400,
		health : 10,
		base : [18, 7]
	}
];