import { readable } from 'svelte/store';

const marketData = [
	{
		market_name: '삼미찜갈비',
		market_description:
			'삼미찜갈비는 부드럽고 매콤한 양념이 특징인 갈비찜을 제공하며, 매운맛의 정도를 선택할 수 있어 취향에 따라 즐길 수 있습니다.',
		thumb: 'https://d12zq4w4guyljn.cloudfront.net/20240618051110682_photo_5fc1da5a6acf.jpg',
		reviews: [
			'음식이 너무 맛있어요! 특히 매콤갈비가 최고였어요.',
			'사장님이 친절하시고 반찬도 정갈하게 나와서 좋았습니다.',
			'가격이 저렴하고 양도 많아 만족스러웠습니다.',
			'한식의 깊은 맛을 느낄 수 있는 곳입니다.',
			'반찬이 맛있고 다양하게 제공돼서 좋았어요.',
			'분위기가 따뜻하고 가족과 함께 오기 좋은 곳입니다.'
		],
		coord: [10, 40]
	},
	{
		market_name: '경희식당',
		market_description:
			'1970년대부터 영업을 시작한 경희식당은 대구 곱창 문화의 중심지 중 하나로, 현지인들과 관광객들에게 꾸준히 사랑받고 있습니다.',
		thumb: 'https://d12zq4w4guyljn.cloudfront.net/20240729112132_photo1_02ce17a0887c.jpg',
		reviews: [
			'곱창이 곱도 꽉 차있고 맛있었어요. 특히 먹고난 후 볶음밥이 최고!',
			'술자리에 제격!',
			'막창요리의 천국이라고 할 만큼 종류가 다양해요.',
			'가격도 저렴하고 맛도 좋아서 자주 오게 됩니다.',
			'직원들이 친절하고 서비스도 빠릅니다.'
		],
		coord: [40, 40]
	},
	{
		market_name: '황금당',
		market_description:
			'대구의 대표적인 디저트 명소로 자리 잡은 황금당은 오랜 전통과 정성으로 만든 다양한 떡과 빵으로 많은 사람들에게 사랑받고 있습니다.',
		thumb: 'https://d12zq4w4guyljn.cloudfront.net/20240515100658_photo1_ae6c59ef90c7.jpg',
		reviews: [
			'빵이 정말 맛있고 향이 좋습니다. 특히 소금빵이 일품이에요.',
			'아침마다 들러서 신선한 빵을 사 가는 게 일상이에요.',
			'사장님이 친절하시고 빵 종류도 다양해서 골라먹는 재미가 있습니다.',
			'가격 대비 품질이 훌륭하고, 특히 크로와상이 맛있어요.',
			'바삭바삭한 식감의 빵이 정말 좋았습니다.',
			'다른 곳에서는 맛볼 수 없는 독특한 빵들이 많아요.'
		],
		coord: [100, 70]
	},
	{
		market_name: '새벽 해산물',
		market_description:
			'오랜시간 대구에서 도매한 경력으로 매일 새벽 잡아 올린 신선한 해산물을 저렴하게 판매하는 해산물 전문점입니다.',
		thumb:
			'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/96/15/7a/photo7jpg.jpg?w=1400&h=-1&s=1',
		reviews: [
			'해산물이 신선하고 가격이 저렴해서 자주 이용합니다.',
			'회가 정말 신선하고 사장님이 친절하게 손질해 주세요.',
			'다양한 해산물이 있어서 선택의 폭이 넓어요.',
			'직접 선택한 해산물을 바로 먹을 수 있어요.',
			'해산물 퀄리티가 좋아서 믿고 먹을 수 있습니다.',
			'매일 다른 해산물들이 들어와서 항상 신선해요.'
		],
		coord: [10, 10]
	},
	{
		market_name: '대구꿀떡',
		market_description:
			'정성스럽게 빚은 전통 떡과 다양한 한과를 판매하는 곳으로, 한국의 전통 간식을 맛볼 수 있습니다.',
		thumb: 'https://blog.kakaocdn.net/dn/WIN5n/btqJVnEeGiL/8AKkpp6kjCJ8g7RkKKo4Pk/img.jpg',
		reviews: [
			'떡이 쫀득하고 맛있어요. 명절 선물로도 좋습니다.',
			'한과가 정말 맛있고 전통의 맛이 느껴집니다.',
			'가격도 합리적이고 떡의 종류가 다양해서 선택의 폭이 넓어요.',
			'직접 만든 떡이라 그런지 맛이 정말 좋습니다.',
			'다양한 전통 간식을 맛볼 수 있는 곳이라 자주 가요.',
			'포장이 예뻐서 선물하기에도 좋습니다.'
		],
		coord: [80, 20]
	},
	{
		market_name: '삼육식당',
		market_description:
			'신선한 한우를 전문적으로 취급하는 정육점으로, 질 좋은 고기를 합리적인 가격에 제공합니다.',
		thumb: 'https://d12zq4w4guyljn.cloudfront.net/20230424034723_photo1_A98nFy2rnr0U.jpg',
		reviews: [
			'고기가 정말 신선하고 맛있어요. 구워 먹기 딱 좋습니다.',
			'사장님이 추천해 주신 부위가 아주 훌륭했습니다.',
			'고기 질이 좋고 가격도 괜찮아서 만족스러웠습니다.',
			'미리 손질해주셔서 바로 요리하기 편리했어요.',
			'좋은 고기를 찾는다면 이곳을 추천합니다.',
			'다른 정육점보다 훨씬 신선하고 질이 좋아요.'
		],
		coord: [5, 90]
	},
	{
		market_name: '신기루잡화점',
		market_description: '다양한 생활용품과 재미있는 소품을 저렴하게 구입할 수 있는 잡화점입니다.',
		thumb: 'https://blog.kakaocdn.net/dn/bqOwWj/btq3q5RJTNJ/SMLIWpwsCEN1NbS9gTxoJk/img.jpg',
		reviews: [
			'다양한 소품이 있어서 구경하는 재미가 쏠쏠해요.',
			'가격이 저렴하고 품질도 괜찮습니다.',
			'독특한 아이템을 발견할 수 있어서 좋았어요.',
			'점원이 친절하고 도움을 많이 줍니다.',
			'집에서 필요한 자잘한 물건들을 한 번에 살 수 있어 편리합니다.',
			'재미있는 물건들이 많아서 쇼핑하는 내내 즐거웠어요.'
		],
		coord: [50, 40]
	},
	{
		market_name: '적두병',
		market_description: '다양한 원두를 직접 로스팅하여 신선한 커피를 제공하는 커피 전문점입니다.',
		thumb: 'https://d12zq4w4guyljn.cloudfront.net/20220910051334129_photo_f351d5760217.jpg',
		reviews: [
			'커피가 정말 향긋하고 맛있어요. 디저트도 맛있습니다.',
			'아늑한 분위기에서 즐기는 커피 한 잔이 일품입니다.',
			'원두를 직접 갈아서 내려주는 커피가 정말 좋아요.',
			'커피 향이 가게 안에 가득해서 기분이 좋습니다.',
			'주문한 커피가 항상 기대 이상으로 맛있습니다.',
			'커피와 함께 즐길 수 있는 디저트도 훌륭해요.'
		],
		coord: [70, 20]
	},
	{
		market_name: '올스타',
		market_description:
			'최신 유행하는 옷을 저렴한 가격에 판매하는 옷가게로, 다양한 스타일을 제공합니다.',
		thumb:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafU-f4_0OlLSMgOPI6O-OvOurvkJIM5MZOB7U4dGic31pAaPuZ3uAsF04DBHckjmY5ws&usqp=CAU',
		reviews: [
			'옷이 예쁘고 가격도 저렴해서 자주 방문합니다.',
			'트렌디한 옷을 찾을 수 있어서 좋아요.',
			'사이즈도 다양하게 구비되어 있어서 만족스럽습니다.',
			'매장 직원이 스타일링을 도와줘서 좋았어요.',
			'새로운 컬렉션이 자주 들어와서 매번 신선해요.',
			'가격 대비 품질이 좋은 옷들을 많이 팔아요.'
		],
		coord: [70, 30]
	},
	{
		market_name: '수산물 간식집 오징어팡',
		market_description:
			'신선한 수산물로 만든 다양한 간식을 판매하는 곳으로, 오징어튀김과 같은 인기 메뉴가 많습니다.',
		thumb:
			'https://mblogthumb-phinf.pstatic.net/MjAyMzA5MjhfMTU4/MDAxNjk1ODU4MjUxNzQ2.TNTfSgBqfCly5vWNCZ40b7QuWGiHMZIfFiAsjVS3H5og.Jh91r-3Thk-u42mcfBnRkW-I-9sj7KXA2_9otN5uEkQg.JPEG.susu0326/20230926%EF%BC%BF183226.jpg?type=w800',
		reviews: [
			'오징어튀김이 바삭하고 맛있어요. 강추합니다!',
			'간식으로 먹기 딱 좋은 메뉴들이 많아요.',
			'가격도 적당하고 양도 푸짐해서 만족스러웠습니다.',
			'신선한 재료로 만든 간식이라 그런지 맛이 달라요.',
			'여기서만 먹을 수 있는 독특한 수산물 간식이 많아요.',
			'오징어튀김은 꼭 한번 드셔보세요. 정말 맛있습니다.'
		],
		coord: [80, 30]
	}
];

export const markets = readable(marketData);
