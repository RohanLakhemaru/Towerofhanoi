document.addEventListener('DOMContentLoaded', ()=>{
    const root = document.getElementById('root');

    const fchild = root.children[0];
    for(let j = 0; j<3;j++){
        let p = document.createElement('p');
        p.innerHTML = j;
        fchild.appendChild(p);
    }

    // const initialstate = fchild;

    // console.log(initialstate);

    // const lchild = root.children[2];
    // lchild.addEventListener('change', ()=>{
    //     console.log('check');
    // });
    // console.log(lchild);

    let diskval;
    const disks = document.querySelectorAll('.tower p');
    for(let i = 0; i<disks.length; i++){
        disks[i].addEventListener('click', (event)=>{
            //prevent parent click trigger on child click trigger
            event.stopPropagation();

            // remove all the data-state attribute on click
            disks.forEach((disk) => {
                disk.removeAttribute('data-state');
            });

            diskval = disks[i].innerHTML;
            disks[i].setAttribute('data-state', 'clicked');
            console.log(disks[i].innerHTML);
        });
    }

    const tower = document.querySelectorAll('#root .tower');

    for(let i = 0; i<tower.length; i++){
        tower[i].addEventListener('click', () => {
            // if(!tower[i].hasChildNodes()){
            //     return;
            // }
            let p = document.querySelector('[data-state="clicked"]');
            let firstchild = tower[i].querySelector('p');
            if(p){
                if(firstchild == null || p.innerHTML < firstchild.innerHTML){
                    tower[i].prepend(p);
                    p.removeAttribute('data-state');
                }
            }
        });
    }

    // disks.addEventListener('click', ()=>{
    //     console.log(this.innerHTML);
    // })

    // console.log(root.children[0]);
    // Array.from(root.children).forEach((element)=>{
    //     console.log(element);
    // })


    // for(let i = 0; i<3; i++){
    //     for(let j = 0; j<3;j++){
    //         let p = document.createElement('p');
    //         p.innerHTML = 'Hello World';
    //         document.getElementById('root').appendChild(p);
    //         console.log(a)
    //     }
    //     a++;
    // }
});