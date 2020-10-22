let socket = new WebSocket(lichess.socket.ws.url);

socket.onmessage = function(event) {
  const m = JSON.parse(event.data);
  if(m.t=="move"){
     console.log(m)
  }
};