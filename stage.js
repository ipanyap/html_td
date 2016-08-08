var Stage = [
	{ //stage 1
		row : 12,
		col : 20,
		paths : [
			[
				[5, -1], [5, 0], [5, 1], [4, 1], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5],
				[3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [8, 7], [8, 8], [8, 9],
				[8, 10], [8, 11], [9, 11], [10, 11], [11, 11], [12, 11], [13, 11], [14, 11],
				[15, 11], [16, 11], [17, 11], [17, 10], [17, 9], [17, 8], [16, 8], [15, 8],
				[14, 8], [14, 7], [14, 6], [14, 5], [14, 4], [15, 4], [16, 4], [17, 4]
			]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 5 }
			],
			[
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Quadrone, amount: 8 },
				{ enemy: Hovercraft, amount: 2 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
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
				{ enemy: Quadrone, amount: 12 },
				{ enemy: Hovercraft, amount: 13 }
			],
			[
				{ enemy: Quadrone, amount: 5 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 25 }
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
		row : 12,
		col : 20,
		paths : [
			[
				[-1, 4], [0, 4], [1, 4], [1, 5], [2, 5], [3, 5], [3, 6], [3, 7], [3, 8],
				[3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [7, 8], [7, 7], [7, 6], [7, 5],
				[7, 4], [6, 4], [5, 4], [5, 3], [5, 2], [5, 1], [6, 1], [7, 1], [8, 1],
				[9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1],
				[17, 1], [18, 1], [18, 2], [18, 3], [18, 4], [17, 4], [16, 4], [16, 5],
				[16, 6], [15, 6], [14, 6], [13, 6], [13, 7], [13, 8], [13, 9]
			]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Quadrone, amount: 8 },
				{ enemy: Hovercraft, amount: 5 }
			],
			[
				{ enemy: Hovercraft, amount: 15 }
			],
			[
				{ enemy: Quadrone, amount: 5 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 5 }
			],
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: SteelTank, amount: 5 },
				{ enemy: Quadrone, amount: 5 }
			],
			[
				{ enemy: SteelTank, amount: 15 },
				{ enemy: Hovercraft, amount: 10 }
			],
			[
				{ enemy: EagleJet, amount: 10 }
			],
			[
				{ enemy: SteelTank, amount: 15 }
			],
			[
				{ enemy: SteelTank, amount: 10 },
				{ enemy: Hovercraft, amount: 15 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 10 },
				{ enemy: Hovercraft, amount: 10 }
			],
			[
				{ enemy: SteelTank, amount: 5 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 5 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: EagleJet, amount: 5 }
			],
			[
				{ enemy: SteelTank, amount: 5 },
				{ enemy: EagleJet, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 5 },
				{ enemy: EagleJet, amount: 10 }
			],
			[
				{ enemy: SteelTank, amount: 20 },
				{ enemy: EagleJet, amount: 20 },
				{ enemy: Hovercraft, amount: 20 }
			]
		],
		fund : 300,
		health : 10,
		base : [13, 10]
	},
	{ //stage 3
		row : 12,
		col : 20,
		paths : [
			[
				[-1, 6], [0, 6], [1, 6], [2, 6], [2, 5], [2, 4], [2, 3], [2, 2], [3, 2],
				[4, 2], [5, 2], [6, 2], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3],
				[11, 4], [11, 5], [11, 6], [12, 6], [13, 6], [14, 6], [14, 7], [14, 8],
				[14, 9], [14, 10], [14, 11], [13, 11], [12, 11], [11, 11], [10, 11],
				[9, 11], [8, 11], [7, 11], [7, 10], [6, 10], [5, 10], [4, 10], [3, 10]
			],
			[
				[-1, 6], [0, 6], [1, 6], [2, 6], [2, 5], [2, 4], [2, 3], [2, 2], [3, 2],
				[4, 2], [5, 2], [6, 2], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1],
				[12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [16, 2], [16, 3], [16, 4],
				[16, 5], [16, 6], [16, 7], [16, 8], [16, 9], [16, 10], [16, 11], [15, 11],
				[14, 11], [13, 11], [12, 11], [11, 11], [10, 11],
				[9, 11], [8, 11], [7, 11], [7, 10], [6, 10], [5, 10], [4, 10], [3, 10]
			]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 10, path: 1 }
			],
			[
				{ enemy: Hovercraft, amount: 5 },
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount : 5, path : 1 },
				{ enemy: SteelTank, amount : 2, path : 1 },
				{ enemy: SteelTank, amount : 2 }
			],
			[
				{ enemy: SteelTank, amount : 5, path : 1 },
				{ enemy: EagleJet, amount : 3, path : 1 }
			],
			[
				{ enemy: SteelTank, amount : 10, path : 1 },
				{ enemy: Hovercraft, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 15 }
			],
			[
				{ enemy: SteelTank, amount : 10, path : 1 },
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: Hovercraft, amount : 15 },
				{ enemy: EagleJet, amount : 10, path : 1 }
			],
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 10, path : 1 },
				{ enemy: EagleJet, amount : 5, path : 1 },
			]
		],
		fund : 300,
		health : 10,
		base : [2, 10]
	},
	{ //stage 4
		row : 12,
		col : 20,
		paths : [
			[
				[15, -1], [15, 0],[15, 1], [15, 2], [15, 3], [15, 4], [15, 5], [15, 6],
				[16, 6], [17, 6], [18, 6], [18, 7], [18, 8], [18, 9], [18, 10], [17, 10],
				[16, 10], [15, 10], [14, 10], [13, 10], [12, 10], [11, 10], [10, 10],
				[9, 10], [8, 10], [8, 9], [8, 8], [8, 7], [8, 6], [7, 6], [6, 6],
				[5, 6], [4, 6], [3, 6]
			],
			[
				[15, -1], [15, 0],[15, 1], [15, 2], [14, 2], [13, 2], [12, 2], [11, 2],
				[10, 2], [9, 2], [8, 2], [7, 2], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6],
				[6, 7], [6, 8], [6, 9], [6, 10], [5, 10], [4, 10], [3, 10], [2, 10],
				[2, 9], [2, 8], [2, 7]
			]
		],
		waves : [
			[
				{ enemy: Quadrone, amount : 5 },
				{ enemy: Quadrone, amount : 10, path : 1 }
			],
			[
				{ enemy: Hovercraft, amount : 10 }
			],
			[
				{ enemy: Quadrone, amount : 10, path : 1 },
				{ enemy: EagleJet, amount : 5}
			],
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 5, path : 1 },
				{ enemy: Hovercraft, amount : 10, path : 1 }
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
			],
			[
				{ enemy: SonicRocket, amount : 4},
				{ enemy: SteelTank, amount : 11, path : 1 }
			],
			[
				{ enemy: Hovercraft, amount : 15, path : 1 },
				{ enemy: EagleJet, amount : 10, path : 1 }
			],
			[
				{ enemy: SteelTank, amount : 20}
			],
			[
				{ enemy: SonicRocket, amount : 5},
				{ enemy: SonicRocket, amount : 5, path : 1 }
			],
			[
				{ enemy: EagleJet, amount : 10 },
				{ enemy: SteelTank, amount : 10, path : 1 },
				{ enemy: SonicRocket, amount : 10 }
			]
		],
		fund : 300,
		health : 15,
		base : [2, 6]
	},
	{ //stage 5
		row : 12,
		col : 20,
		paths : [
			[
				[2, -1], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
				[2, 9], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [7, 10], [8, 10], [9, 10],
				[10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [15, 9], [15, 8],
				[15, 7], [15, 6], [15, 5], [15, 4], [15, 3], [14, 3], [13, 3], [12, 3], [11, 3],
				[10, 3], [9, 3], [8, 3], [7, 3], [6, 3], [6, 4], [6, 5], [6, 6], [7, 6], [8, 6],
				[9, 6]
			],
			[
				[17, 12], [17, 11], [17, 10], [17, 9], [17, 8], [17, 7], [17, 6], [17, 5], [17, 4],
				[17, 3], [17, 2], [17, 1], [16, 1], [15, 1], [14, 1], [13, 1], [12, 1], [11, 1],
				[10, 1], [9, 1], [8, 1], [7, 1], [6, 1], [5, 1], [4, 1], [4, 2], [4, 3], [4, 4],
				[4, 5], [4, 6], [4, 7], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8],
				[10, 7]
			]
		],
		waves : [
			[
				{ enemy: Quadrone, amount : 15 },
				{ enemy: Hovercraft, amount : 5 }
			],
			[
				{ enemy: Quadrone, amount : 10 },
				{ enemy: Quadrone, amount : 10, path : 1 }
			],
			[
				{ enemy: Hovercraft, amount : 10, path : 1 },
				{ enemy: Hovercraft, amount : 10}
			],
			[
				{ enemy: EagleJet, amount : 10 },
				{ enemy: SteelTank, amount : 10, path : 1}
			],
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: SteelTank, amount : 10, path : 1},
				{ enemy: EagleJet, amount : 10 },
			],
			[
				{ enemy: SteelTank, amount : 10, path : 1 },
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: EagleJet, amount : 10, path : 1 },
				{ enemy: SonicRocket, amount : 10 }
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
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 5, path : 1 },
				{ enemy: MagmaTank, amount : 4, path : 1 },
				{ enemy: SonicRocket, amount : 4 }
			],
			[
				{ enemy: SteelTank, amount : 10 },
				{ enemy: SteelTank, amount : 10, path : 1},
				{ enemy: MagmaTank, amount : 10 },
				{ enemy: MagmaTank, amount : 10, path : 1 },
				{ enemy: EagleJet, amount : 10 },
				{ enemy: EagleJet, amount : 10, path : 1 }
			]
		],
		fund : 400,
		health : 15,
		base : [10, 6]
	},
	{ //stage 6
		row : 12,
		col : 20,
		paths : [
			[
				[-1, 5], [0, 5], [1, 5], [1, 4], [1, 3], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2],
				[6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7],
				[11, 7], [12, 7], [13, 7], [14, 7], [15, 7], [15, 6], [15, 5], [15, 4], [15, 3],
				[15, 2], [16, 2], [17, 2], [18, 2], [18, 3], [18, 4], [18, 5], [18, 6]
			],
			[
				[-1, 5], [0, 5], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [2, 9], [3, 9], [4, 9],
				[5, 9], [6, 9], [7, 9], [8, 9], [9, 9], [9, 8], [9, 7], [9, 6], [9, 5], [9, 4],
				[10, 4], [11, 4], [12, 4], [13, 4], [13, 5], [13, 6], [13, 7], [13, 8], [13, 9],
				[13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10], [18, 9], [18, 8]
			]
		],
		waves : [
			[
				{ enemy: Quadrone, amount : 10 },
				{ enemy: Hovercraft, amount : 5 }
			],
			[
				{ enemy: Hovercraft, amount : 15, path : 1 }
			],
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: SteelTank, amount : 5, path : 1 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 10 },
				{ enemy: EagleJet, amount : 10, path : 1 }
			],
			[
				{ enemy: SonicRocket, amount : 10, path : 1 },
				{ enemy: SteelTank, amount : 10 },
			],
			[
				{ enemy: EagleJet, amount : 10 },
				{ enemy: MagmaTank, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 10, path : 1 },
				{ enemy: SonicRocket, amount : 10, path : 1 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 5, path : 1 },
				{ enemy: Phantom, amount : 5 }
			],
			[
				{ enemy: Phantom, amount : 7 },
				{ enemy: Phantom, amount : 7, path : 1 }
			],
			[
				{ enemy: EagleJet, amount : 10, path : 1 },
				{ enemy: SteelTank, amount : 10 },
				{ enemy: MagmaTank, amount : 5, path : 1 },
				{ enemy: Phantom, amount : 10 }
			]
		],
		fund : 400,
		health : 10,
		base : [18, 7]
	},
	{ //stage 7
		row : 12,
		col : 20,
		paths : [
			[
				[6, -1], [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7],
				[7, 7], [7, 8], [8, 8], [9, 8], [10, 8], [10, 9], [11, 9], [12, 9],
				[13, 9], [14, 9], [15, 9], [16, 9], [17, 9], [17, 8], [17, 7], [17, 6]
			],
			[
				[-1, 9], [0, 9], [1, 9], [2, 9], [2, 8], [2, 7], [2, 6], [2, 5], [2, 4],
				[2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3],
				[11, 3], [12, 3], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2], [17, 2],
				[17, 3], [17, 4]
			],
			[
				[4, 12], [4, 11], [4, 10], [4, 9], [4, 8], [4, 7], [4, 6], [4, 5], [5, 5],
				[6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5], [14, 5],
				[15, 5], [16, 5]
			]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: Quadrone, amount : 10 }
			],
			[
				{ enemy: Quadrone, amount : 10, path : 1 },
				{ enemy: Quadrone, amount : 10, path : 2 }
			],
			[
				{ enemy: Hovercraft, amount : 5, path : 1 },
				{ enemy: Hovercraft, amount : 5, path : 2 }
			],
			[
				{ enemy: EagleJet, amount : 10 },
				{ enemy: EagleJet, amount : 5, path : 1 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: MagmaTank, amount : 5, path : 2 }
			],
			[
				{ enemy: Hovercraft, amount : 10, path : 1 },
				{ enemy: EagleJet, amount : 10 },
				{ enemy: SteelTank, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 15, path : 2 },
				{ enemy: SteelTank, amount : 10, path : 1 }
			],
			[
				{ enemy: SteelTank, amount : 15 },
				{ enemy: SonicRocket, amount : 10 }
			],
			[
				{ enemy: SonicRocket, amount : 15, path : 1 },
				{ enemy: MagmaTank, amount : 15, path : 1 }
			],
			[
				{ enemy: MagmaTank, amount : 10, path : 2 },
				{ enemy: Phantom, amount : 15, path : 2 }
			]
		],
		fund : 400,
		health : 10,
		base : [17, 5]
	}
];