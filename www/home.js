/* globals  Vue */
Vue.createApp({
	data() {
		return {
			roomId: "",
		};
	},
	methods: {
		generateRandomRoomId() {
			this.roomId = Math.random().toString(36).substr(2, 6);
		},
		goToRoom() {
			if(/[\S]{4,16}/.test(this.roomId)){
				window.location = "/" + this.roomId;
			}else{
				alert("请输入4到16位的房间号");
			}
		},
	},
}).mount("#app");
