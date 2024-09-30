// document.body.innerHTML='<button> New Button</button>'
// let url : string = window.location.href;
// //console.log(url); 
// let url_segment:string[]=url.split('?');
// let play_btn : HTMLElement | null =document.getElementById('play');
// let video: HTMLElement | null =document.getElementById('video');
// play_btn.addEventListener('click',():void=>{
//     if(video.paused){
// video.play();
// video.style.display='unset';
// play_btn.classList.remove('bi-play-fill');
// play_btn.classList.add('bi-pause');
//     }
//     else{
//         video.style.display='none';
//         play_btn.classList.add('bi-play-fill');
//         play_btn.classListremove('bi-pause');

//     }
// })
// let date =new Date();
// let main_date: number =date.getDate();

// Array.from(document.getElementsByClassName('date_point')).forEach(el(el:Element): void=>{
//     if(el.innerText==main_date) {
//         el.classList.add('h6_active ')
//     }

// })

// let pvr :{ pvr: String; movie: String... = [
//     {
//         pvr: 'PVR Vegus',
//         movie: 'Jawan',
//         loc: 'dwarka Sector 14 , New Delhi',
//         audi: 1,
//         type:'4DX',
//         series: [ 'J','H','F','E','D','C','B','A' ],
//         row_section: 3,
//         seat: 24,
//         j: [2,6,24,23,7,16,17,18,19,13,12],
//         h: [1,2,78,20,23,8,11,18,19,13,12],
//         f: [5,6,15,17,18],
//         e: [2,7,8,17,18],
//         d: [5,6,15,17,18],
//         c: [1,2,11,12,19],
//         b: [8,5],
//         a: [],
//         price: [800,800,560,560,560,430,430],
//         date: 23,
//     }
//     {
//         pvr: 'PVR Vegus'
//         movie: 'Gadar2',
//         loc: 'dwarka Sector 14 , New Delhi',
//         audi: 2,
//         type:'4DX',
//         series: [ 'J','H','F','E','D','C','B','A' ],
//         row_section: 3,
//         seat: 24,
//         j: [3,8,21,22,9,13,16,18,20,12,15],
//         h: [5,6,8,19,24,8,13,19,21,12,11],
//         f: [1,3,13,15,22],
//         e: [2,9,10,20,24],
//         d: [7,12,9,21,20],
//         c: [6,8,11,12,19],
//         b: [8,5,12,13,14],
//         a: [],
//         price: [800,800,560,560,560,560,430,430],
//         date: 24,
//     }
// ]


// let addSeats: (arr: any) => void=(arr: any): void => {
//     arr.forEach((el : any , i: any ) : void =>{
//         const {series, row_section, seat, price , a,b,c,d,e,f,h,j } = el;

//         for (let index : number = 0; index < series.length ; index++){
//             let row : HTMLDivElement = document.createElement('div');
//             row.className ='row';   

//             let booked_seats : any[] = [];
//             booked_seats = [...eval(series[index].toLocalLowerCase())];
//             // console.log(series[index]);
//         for (let seats : number = 0; seats < seat ; seats++){

//              if (seats === 0) {
//                 let span : HTMLSpanElement = document.createElement('span');
//                 span.innerText = serie[index];
//                 row.appendChild(span);
                
//              } 

//             let li : HTMLDivElement = document.createElement('li');
//             let filter : any[] = booked_seats.filter(el : any => {
//                 return el === seats;
//             } ) 
//             if (filter.length > 0 ){
//                 li.className = "seat booked";

//             }else{
//                 li.className = "seat"; 
//             }

//             li.id = series[index]+seats;
//             li.setAttribute('book',seats);
//             li.setAttribute('sr',series[index]);
//             li.innerText = price[index];

//             li.onclick = () : void => {
//                 if (li.className === 'seat booked ') {
//                     li.classList.remove('selected');
//                 } else {
//                     li.classList.toggle('selected');
//                 }
//             }

//             let len : HTMLElement = Array.from(document.getElementsByClassName('selected').length;)
//             if (len > 0) {
//                 document.getElementById('book_ticket').style.display = 'unset';
                
//             } else {
//                 document.getElementById('book_ticket').style.display = 'none';
                
                
//             }

//             row.appendChild(li);

//             if (seats === seat-1) {
//                 let span : HTMLSpanElement = document.createElement('span');
//                 span.innerText = serie[index];
//                 row.appendChild(span);
                
//              } 

//             // row.className ='row'; 
        
//         }
//         document.getElementById('chair').appendChild(row);
//         }
//     })
// } 
// let data: { pvr: string; movie: String... = pvr.filter(obj : {pvr: String; movie: String... =>obj.date == date && obj.movie  == url_segment[1]})}
// addSeats(data)
  

// document.getElementById('book_ticket').addEventListener('click', () => {
//     Array.from(document.getElementsByClassName('selected')).forEach(el : Element => {
//         let seat_no : string | null = el.getAttribute('book');
//         let seat_sr : string = el.getAttribute('sr').toLocalLowerCase();


//         let obj = {
//             movie: url_segment[0];
//             date : main_date
//         }
//         let getData : void[] = pvr.map((obj : {pvr: String; movie:( Strin...) : void => }))
//         if (
//             obj.movie === url_segment[1] && obj.date === main_date
//         ) {
//             obj[seat_sr].push(+seat_no);
//         }
//         return obj;
//     });

//     document.getElementById('chair').innerHTML ='';
//     let data : any = get
// })
document.body.innerHTML = '<button> New Button</button>';
let url: string = window.location.href;
let url_segment: string[] = url.split('?');

let play_btn: HTMLElement | null = document.getElementById('play');
let video: HTMLVideoElement | null = document.getElementById('video') as HTMLVideoElement;

if (play_btn && video) {
    play_btn.addEventListener('click', (): void => {
        if (video.paused) {
            video.play();
            video.style.display = 'unset';
            play_btn.classList.remove('bi-play-fill');
            play_btn.classList.add('bi-pause');
        } else {
            video.pause(); // Added this line to pause the video
            video.style.display = 'none';
            play_btn.classList.add('bi-play-fill');
            play_btn.classList.remove('bi-pause');
        }
    });
}

let date = new Date();
let main_date: number = date.getDate();

Array.from(document.getElementsByClassName('date_point')).forEach((el: Element): void => {
    if (el.innerHTML === main_date.toString()) {
        el.classList.add('h6_active');
    }
});

let pvr = [
    {
        pvr: 'PVR Vegus',
        movie: 'Jawan',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 1,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [2, 6, 24, 23, 7, 16, 17, 18, 19, 13, 12],
        h: [1, 2, 7, 8, 20, 23, 8, 11, 18, 19, 13, 12],
        f: [5, 6, 15, 17, 18],
        e: [2, 7, 8, 17, 18],
        d: [5, 6, 15, 17, 18],
        c: [1, 2, 11, 12, 19],
        b: [8, 5],
        a: [],
        price: [800, 800, 560, 560, 560, 430, 430],
        date: 23,
    },
    {
        pvr: 'PVR Vegus',
        movie: 'Gadar2',
        loc: 'Dwarka Sector 14, New Delhi',
        audi: 2,
        type: '4DX',
        series: ['J', 'H', 'F', 'E', 'D', 'C', 'B', 'A'],
        row_section: 3,
        seat: 24,
        j: [3, 8, 21, 22, 9, 13, 16, 18, 20, 12, 15],
        h: [5, 6, 8, 19, 24, 8, 13, 19, 21, 12, 11],
        f: [1, 3, 13, 15, 22],
        e: [2, 9, 10, 20, 24],
        d: [7, 12, 9, 21, 20],
        c: [6, 8, 11, 12, 19],
        b: [8, 5, 12, 13, 14],
        a: [],
        price: [800, 800, 560, 560, 560, 560, 430, 430],
        date: 24,
    }
];

let addSeats = (arr: any[]): void => {
    arr.forEach((el: any): void => {
        const { series, seat, price } = el;

        for (let index = 0; index < series.length; index++) {
            let row: HTMLDivElement = document.createElement('div');
            row.className = 'row';

            let booked_seats: number[] = [...eval(series[index].toLowerCase())];

            for (let seats = 0; seats < seat; seats++) {
                if (seats === 0) {
                    let span: HTMLSpanElement = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }

                let li: HTMLDivElement = document.createElement('li');
                let filter = booked_seats.filter(el => el === seats);

                li.className = filter.length > 0 ? 'seat booked' : 'seat';
                li.id = series[index] + seats;
                li.setAttribute('book', seats.toString());
                li.setAttribute('sr', series[index]);
                li.innerText = price[index].toString();

                li.onclick = (): void => {
                    if (li.className.includes('booked')) {
                        li.classList.remove('selected');
                    } else {
                        li.classList.toggle('selected');
                    }

                    let len = document.getElementsByClassName('selected').length;
                    document.getElementById('book_ticket').style.display = len > 0 ? 'unset' : 'none';
                };

                row.appendChild(li);

                if (seats === seat - 1) {
                    let span: HTMLSpanElement = document.createElement('span');
                    span.innerText = series[index];
                    row.appendChild(span);
                }
            }
            document.getElementById('chair').appendChild(row);
        }
    });
};

let data = pvr.filter(obj => obj.date === main_date && obj.movie === url_segment[1]);
addSeats(data);

document.getElementById('book_ticket').addEventListener('click', () => {
    let selectedSeats = Array.from(document.getElementsByClassName('selected'));
    selectedSeats.forEach((el: Element) => {
        let seat_no = el.getAttribute('book');
        let seat_sr = el.getAttribute('sr').toLowerCase();

        let obj = {
            movie: url_segment[1],
            date: main_date,
        };

        let getData = pvr.map(el => {
            if (el.movie === url_segment[1] && el.date === main_date) {
                el[seat_sr].push(+seat_no);
            }
            return el;
        });

        document.getElementById('chair').innerHTML ='';
         let data : { pvr: String; movie: String... = getData.filter(obj: {pvr: String; , movie: Strin...  => obj.date === main_date && obj.movie === url_segment[1]);}
         addSeats(data);


         
            // let tic : HTMLElement =document.createElement('tic');
            // tic.innerHTML =   
            // <><div class="barcode">
            //         <div class="card">
            //             <h6> ROW ${seat_sr.toLocaleUpperCase()}</h6>
            //             <h6> ${main_date} September 2023</h6>
            //         </div>
            //         <div class="card">
            //             <h6>Seat ${seat_no}</h6>
            //             <h6>23:00</h6>
            //         </div>

            //         <svg id="${seat_sr}${seat_no}barcode"></svg>
            //         <h5>VEGUS CINEMA</h5>
            //     </div>\
            //     <div class="tic_details">
            //          </div></>


        document.getElementById('ticket').appendChild(tic);
    })

})     




         document.getElementById('back_ticket').addEventListener('clik', () : void =>{
            document.getElementById('screen').style.display = 'flex';
            document.getElementById('chair').style.display = 'unset';
            document.getElementById('det').style.display = 'flex';
            document.getElementById('book_ticket').style.display = 'unset';
            document.getElementById('book_ticket').style.display = 'none';
            document.getElementById('ticket').style.display = 'none';


         })
        

        });
});