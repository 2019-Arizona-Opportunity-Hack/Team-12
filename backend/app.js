const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { personRouter } = require("./routes");

const app = express();

const port = 3001;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    })
  );



  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use("/person", cors(),personRouter);



app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    return next(err);
  });


app.get("/", (req,res)=> res.send("hello world!"));

personRoom = {
  hotel:{},
  cab:{}
}

var server = require('http').createServer(app);

var io = require('socket.io').listen(server);

io.on('connect', function(socket){

  /*var countdown = 1000;
  setInterval(function() {
    countdown--;
    io.sockets.emit('timer', { countdown: countdown });
  }, 1000);*/

  socket.on('hotelPriceChange', function(data){
    let fullData = data.split(',');
    let hotelName = fullData[0];
    let person = fullData[1];
    let price = fullData[2];
    //console.log(person, hotel)

    if(personRoom.hotel[person] == null){
      personRoom.hotel[person] = {[price]:hotelName};
      console.log(personRoom);
      io.emit('lowestHotelPriceUpdate',`${person},${price}`)
    } else{
      
      let arr = Object.keys(personRoom.hotel[person]);
      console.log(arr[0]);
      if(price < arr[0]){
        personRoom.hotel[person] = {[price]:hotelName};
        io.emit('lowestHotelPriceUpdate',`${person},${price}`)
      }
    }

    if(price == 0){
      socket.emit('exitHotel',`${person}`);
    }

    socket.on('globalHotelStatusUpdate',function(data){
      console.log('there has been a tec tonic shift!')
      io.emit('updateHotelPage',data);
    })
  });

  //cabs

  socket.on('cabPriceChange', function(data){
    let fullData = data.split(',');
    let cabName = fullData[0];
    let person = fullData[1];
    let price = fullData[2];
    //console.log(person, hotel)

    if(personRoom.cab[person] == null){
      personRoom.cab[person] = {[price]:cabName};
      console.log(personRoom);
      io.emit('lowestCabPriceUpdate',`${person},${price}`)
    } else{
      
      let arr = Object.keys(personRoom.cab[person]);
      console.log(arr[0]);
      if(price < arr[0]){
        personRoom.cab[person] = {[price]:cabName};
        io.emit('lowestCabPriceUpdate',`${person},${price}`)
      }
    }

    if(price == 0){
      socket.emit('exitCab',`${person}`);
    }

    socket.on('globalCabStatusUpdate',function(data){
      console.log('there has been a tec tonic shift!(in cab!)')
      io.emit('updateCabPage',data);
    })
  });

    if(Object.keys(personRoom.cab).length != 0){
      //console.log('adf');
      let personKey = Object.keys(personRoom.cab);

      let priceObj = {}
      for(let person of personKey){
        priceObj[person] = Object.keys(personRoom.cab[person])[0];
      }
      //let priceKey = Object.keys(personRoom.hotel[personKey])[0];
      console.log('A new user! sending values!(cab)',priceObj);
      socket.emit('updateCabValues',priceObj);
    }


})

server.listen(port, () => console.log(`app listening on port ${port}`));
//app.listen(port, () => console.log(`Example app listening on port ${port}`));
