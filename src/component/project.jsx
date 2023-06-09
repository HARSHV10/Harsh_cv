import React from 'react';
import CardDesign from './card';
import "./project.css"

export default function Project(){
    const arr =[
        {
        title:"Money Mate",
        content:"Made budgeting app lets user budget expenses using Speechly api for speech recognition ",
        link:"https://gilded-tapioca-c778ee.netlify.app/",
        img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMRERUTExAWFhUXEhoWFRcXFxYXFxgXGBgWFhUYFxcYHCggGBolHRUVITEhJykrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICIrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALABHwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABKEAABAwEEBgYFBwkGBwAAAAABAAIDEQQSITEFBkFRYXETIjKBkaEHFFKx0UJTcoKSwfAWJENic6KywtIVIzM04fE1Y3SDo7PD/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EADIRAAIBAgQDBgUFAQEBAAAAAAABAgMRBBIhMRNBUTJhcYGR8AUUUqHRIkKx4fHBkjP/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIijTWpra4gndx57FGc4wV5Ox1JvYkoo1ltQkBNCKKSuQnGcVKOzDTTswiLxJWhpnTCuVdimcPaxyPDQSTQAVJOQAzJWk2jWm0EkAMZjSgbUjgak+5QLZp20PY5rpTQihF1owOeQXnS+JUv2pvyNiwNTnY3gabs/z7O8096kWe3RSf4crH/Rc13uK5dN2TyVt6P7NetDn+xH5uNB5Byjh8dOrJRaWpOthIwi5JvQ6IiIvTMAREQBERAEREAREQBERAEREAREQBERAEREAXwlfVhnfsQ42fYnE1OxZV4YKBeRLU0HigMqIiHSPbZLrCe7xVPDHfcG1pVXVoivtLd/4CpJYyw0OB/GIXi/E1JVIykrx/vbuua8PZppbnuO9G4GhH3q+UHR9pvijsx5hTlr+H04wptwldPry6lVeTcrNaoIvlVVWzWCzxVrJeI2N63nkPFbJ1IwV5OxXGLk7RVzVdarH0docQMH9ccz2vPHvVJN2SrrT2nG2m6GxEBpJDyRUgjEXQOAxrsVLN2SvnMRl4zyPRu/r/AGe3RzcNKS1PNqPVK3H0fWa7A+T25KD6LRT3ly0u0m9QDHHYtr0HrNHDCyN8bqNFC5pDsakkkYEYk5VWjAzhCd5u3TzKsXGUoWirm6ooVg0lFOKxSB28bRzacQpq91NNXR5DTTswiIunD4VFsdujmbejkDhw2cxmFTa6aT6KHo2nryVHJnyj35d5VDqRYC+Yy1IbGNhpVxyB3gDE9y1Qw96Lqydunf8A6Zp17VVTSv17jd22mkhY7biw7xu5qWqyV0dpZWN4JacKbDuO0VXiw6R+RJgRhU+48eKz5dC1TXk9mWyIiiWBERAEREAREQBEWC02hkbS97g1ozJQ6k3ojOi1yTW6AfIlLTk64A08qkFSBrPZSAemzNKUdUc8MOarVam+aNEsFiI7wfoy6JUUuqar0JbwBHZO0Y1G+q+RRV5KwyMAF/JSGNAyX0BfUOhERDpU6RvNfUEgEbOGxR5rUXtAOJBzVzNHeaRvHNQodGjG8a7v9V4+JwlZ1Hw3+mW93ovfcjVTqwUVm3Rj0SzrE7AKeP8Ass+lNJss7Lzziey0ZuPD4r3a7QyzxF5wa0ZbSdgHErnlvtj55C95xOQ2AbAFOVT5Kiqa1k9e7x8OhOlSeIm5Pb3oZ9KaZlnPWdRuxg7Pf7R5quc0HNTYdGSuAIbgRUVLRXlisZsjgwvOF19wjbVeRKbnLM3dnpxyRVo2MC8Mxqe4cgp7NH3jEL9OlDqGmVATvxX1+j23XGOS9c7TS0tIG8VzUcyGdXK8DE8h96+FuNR38VZMsLQ1pklul4q0Xa4bC7ckWjql4MjWhlKnMGuSZjueJSOvRvDmuLSMWkEgjkQtu1f1vqRHaCNwkyH1xs5/7qmtGiy7qtljcaVBvUGwU54+SgW3RUsQq9lBWlagivcVrw+JcNn5dTPVpwqaP+zroK8SPDQSTQAVJ3AZrRtTdYSwizynqHCNx+SdjT+qdm7lltWm7E+eB0bHhpdmSMCNrcMq78V79CpCsk7269x5NaEqTa36d5z3S9tdarQXAE3nBsbdtK0aOZrXmStq0hSx2RsDT13jrEce277h/oo2rGgHxTOknbdEY6uIIJIxcDuAr48FXaVthtExcK4m6wcPkjmc+9evXnGclTh2Yr/PfW54knKnTcpdqWnfbn+F5E/VOxF8vSYhrN2FSchy2+C2WezxztvMcCdjmkEHgaKq0g4WOytiaeu+tSOPbPuA7lB1Rs7nSlwJDWjrUODicgd+/uXl1a96tkaqMFSiqbWr399xcsllgwcKt8u47ORU7R9s6UOwoQcuByWZ12RpFag4Gi82exsjxaKHmSpZ4yV19jUoSi7ciSiIuFgREQBERAFrGm3B9ss8Mn+FQuocnP6waDvyH2uK2dV2lNFRWhobIMuy4YOHI/cq6sXKNkaMNUjTqZpdGrrdXVrrw962POnLgs0nSAXOjOHGnVA41pRafq7qy6aj5atj2bHP5bm8fDetng1ejqDJJJNd7IldeaPq5HvVvLIGtLiaACpO4DNVypcSSlNbcvyaIYz5anKnQldt72tbwXXq36aXKHTemGWMRxsjBFMWjC6wYYcSfcVe2aQOY1wyLQRyIqueWmwWm2PfO2Ilrj1akDqjAAVONAPGq2rVC2mSC68UfEejNc6Ds144U7lGlVcptPZ7FmLwcKdCMou8l29b6vr4PTxL9ERajywi8lw3rS9VNHuit1pd0Ut1953TveXNkvOabt0nAjEDDANOWAXLrY7bS5uyIi6cNJ1xt1+QRA9VmJ4uI+4e8rXVmtU197nn5Ti7xNVhXy1ao6lRy6/xy+x79Knw4KJeROb0cDjG55BIFCcKO20zX2aG908QNXX74yFciR3ZKqitkjW3WvIG4YeawE7VTYKm77+73LlouPszXEBzA69iML2VfBeLohEri9pL2lrWtNT1jmdyq42FxAAqSaAK1g0A49p4HACvwXGktyLSju/d7noASGOQGMgMDXtfTq0zNPcssTOtaBGxrsWANwunfhkq/Sujuhu0dUGuylKU+KgIlcKCktH7uTrVETK1rohGSWigpQ1dSv43Kv09KXWiTHC9TwAH3L1JIQKgmoGB2imVFXPeXEkmpJqTvJzV1JczslZo+LpmqWlfWIKONZI+q/efZd3jzBXMlsWo1ruWoN2SNLTzAvNPkR3r0MJUyVF0en4M+Kp5qd+mv5OiyxhwIIBBFCDkRuKqoNARMmEraigNG5gHeK478FcovbTa2PGlTjJpyV7Gg6wOkfaDfY4Y3WAjMZCm+pNe9bNZbOLNA1g7RxceJ7XhkrSRgNKgGhqKitDsI4qNbLKXGoOzL4LBiYVI05OnrJ/bqdoUoxqZpPcjaPiq6uwfiitlgssNxoG3M81nUsDh+DRUeb1fvuLqs80rhERbCsIiIAiIgCIiAKs1hjLrNK1naLDgMztI8KqzRcksyaJ05uE1Jcmn6FPorSUJgY4SNaGsAIJAu0FKEfiqwattvOnnAIbLILtcKtaCL3eSVMk0JZ3OvOgYXVrlgTxGRVi1tBQKuMZNrNy/wvnVppSVO/6t720V7279eenhqz0sMstMAsj3UFVDVyMbYqsRtlx7QduZ2cD4rKGmuCw2qC+2m3Yu6cyDvyLRfCq7RdqqLju0MBXaPirJcasyxNNXRygimG7BfFP07Z+jtEjdl4uHJ3W+/wAlAXyUo5JOPQ+jjLMlLqERFE6e43lpBGYNRzW5wvvNDqEVANDmOCqtCaPAaJHCrji3gN/NTbZpBkWDia7hiVXJ3dkZarzOyIunrK+Rrbra0JrTPGnitcIottsWkGS1DSajYcDRRdOWEOYXgdZoqeI215JF20ZKnPL+lmr2g9UqAptrPV71CWunsWy3CstXTS1Q/tW+Zoq1Xep9mL7ZHubV55AUHmWq+kr1I+K/kqqu0G+5nUFSs1ksxlfCZA17DQ1wFeezvopml7X0UL35kCjRvccGjxouNaxanWyN7pS0mpvXh/UMPGi9yU7O17eWh5tGhni5WvrZJNJ9W1e97aaJPc7gxwIqDUHIjJe1+f8ARutFssbqX3U9l23xwPOhXQtWPSCLTI2F8RvuIALeYFSDhTHf3KTbWrWnVar39iLopu0HquT/AEy9Hp6NvuN+REUigIiIAiIgCIiAIiIAiIgCIiAxT5d6o9L6es9lH97KA6mDB1pDyYMe80HFePSH/wAPl+lH/wCxi4+1oGQA5KLlYnGnm1Nst2vtodJeha2NgyaQHuPF5yHIZbypuidf3F4FpYy6flxhwI4uaSajlTvVFonVS02mLpogwtvFoBdRxIzIqKUxpnsKxWnVi2R9qyyfVAf/AAEqN5FuWGx1eMxzND2lrmnEOafcQqnWmx2uWC5Z5ttXAm68tp2WvHHfTLNc0slunsrzce+J21uVfpMdge8LpWo2mX2yOTpaX2OAq0Uq1wwqN9QVLMpLKyl03B5kcxfabRA8skvBzc2yVPv2cQp1m0204PF078x8Quha56BE8Ejy6hjic4ENFTdBddJ9k7lxy9vXmVsNG+q8z0qNduN/aNyima7suB5FZVpIKzstcjcnu8fisbwnRmlVuqOp6I0jG6IAvaC3qkFwGQw8qKu0tGJXufE9sgFA4McHFpGFCAcMveub/jAn7ismh9Jy2eSQwvuFwAOANaGvygVY/h8MspQk7rql+bmRVZwmrpa+JvejZxHK1zshWvgR8Fa2/TcJifdeC66QBQg1OG7iueWrT1ok7cl76jK+IbVRvXn+15BUfJt6tl8pKWrLySQuzXhU3r7/AGvIL76/J7XkFeqDWxLiIuF0PUnRRhiMrxR8lKDaGDLkTWvguc6pzmS2wMfRzTJiCBQ0BPvAXapHhoJJoAKk8AtmDw9nnfIx4uroormUulbSx1oije4Bkf8AfOJ7N7FsYJyGN447gsdh9aZNNLK9r4LobFjddRovBwY2rXFzpCyvVNI24YqLNbZYrM+1RwukkllEl0Cv9w0jA4ih6JrqZ9ZwwOSkyMYGse4ts/V6aUsfWJoB6tbzQ01dQ3i0dgrZFvLmXP2iqajmVNvsr78/vot76ES2aKsUzvV5S1s1KkdgvcQHOLGvF2QdbMVplhRRNUtVY7NbJnMxDGhoOOD3CpAqTSjTj9IK+tlqLIjJI2OWNoDw5tMxi111xIzpiHV3BSdB2Uxwtvdt5Mj/AKbzePhgO5cyrMktObJ8WpwpObvyWztfez3WmjWnaLJERXGIIiIAiIgCIiAIiIAiIgCIiA1j0in8wfxfH/G1cjXWfSSfzF37RnvXKGRlxDRmSAOZwCrluaKWx2XU2zdHYYG0zjvnm8l/8yvFis8QY1rRk1oaOQFFlVhnbvqcv9KUF20xv9uGnexxr5PapvonONp5R/8A0Ur0q2esMMnsylvc9tfewKF6LJA0WpzjQARkncB0hKr2kXXvTNq1qtzY4HMOLpWlgHAijj3A+JC5p/Y0W4/aKu9L24zyuecsmjc0ZD7+9Q14OJxUqlS8XZcvfeeph6Cpw1Wr3K06Ch9k/aK+jQsW532irFFRxqn1Mu4cOhUxaj20tBElnNRWt5+P/jXmDVWSF7vWLpqBdLC6h34kDwW16K0oYuq7Fnm3lw4LYopGvaHNNQclZPH1rNaJPorGPg8OSbu7bGg6P1bZLI0AEtr1sTgNuO9bA7U2xjEtdT9o74q+klawVcQ0ccFr+ltLdILjOztO13DgFm49WW0mWZc70VjUZtHxXjdBu3jdxOVcPKix/wBns3HxKt5LODlh7lEe0g0K1xqt8y1wS5HnRbW2eZkzW1cx14Ak0OwjwJXXLNaI7VBeGLHtII244OaaZHMLka2TUrS3QzdE49SQ05Pyae/Lw3LZha7jLLLZmXE0c0c0d0bI7V+SI1stocz9R/WYfh4FRJ7Y5oe222YljyKyR1LKNpd21bQ1Na1qVty+UXpcK3Zdv49PxYz/ADbn/wDaKl37S/8AS/6mado+yWerILM4ujdL08tTWjWBtGGori672qk44rclEs9hjjLnMja1zu0WilfBS1KKau5blVWcXaME7Lra+u+3p4JBERTKQiIgCIiAIiIAiIgCIiAIiIDUvSZ/kv8AvM/mK57qtZ+ktkDf+a13czrnyaugek//ACbf27f4XrVfRtZ71uDvYie7vN1nueVB7l0HaDOsoiKZSa7r9Z79gl3tuvH1XCvlVc81ctLmxzMHZkLKn6F7q/vDwXX7TC17HMcKtc0tcN4IofJcYsursMZNHPeK4XjSoGRIbSposWOnCNNqTs3por+PNGvCKTlor213sWy+L6vi+fPYCIi4D6tv0e9nRtDHAgNA4942LT0XJK5CcM3MvNZzjH9b+VUa+k1XxdSsjsI5VYKLbBkVKWC2ZDmpw7SOy2IaIi0FZ1fVzSHrFnY89ql1/wBJuB8cD3q0Wi+jy2UfJCTmL7eY6rvIt8FvS93D1M9NSZ41eGSbQREVxUEREAREQBERAEREAREQBERAERV+ktKR2cAvvY5UBPnkPFdSb2Iykoq8nZGu+lI/mkf/AFA/gkVb6KbPjaJODGD95zv5Vg9IOnBaLO1scMhIlDsBXC64GobWmai6k6x9BEYhA++55eb7XtGQFAaU2bxmu8KebY583SVK6l6XOqotMdrZNsYwdzj96xu1ptH6g+qf6lPgzM3z9Hv9DZtO2jo7PI7bdoObuqPeucKz0tpiaeMxuc2hIOVMjUY9ypRDJ7XmvI+IYOvUqLLG6ty8T1MB8Qwyptyklrz0ZkfKBmV7a4HIqK6yOG49/wAVj6NzdhC86pg6kO1FryPRpYyjU7Ek/MnIojbSeBX31s7lnyM03JSKJ62dyetncE4cjmZEtFE9aO4LybS7gu8NjMiaotsdiAsZndv9y8EqUYWd2G7nlF7ZETkCVm9UdTZyqtUKFWavGLfkzLVxVGk7Tmk/H39ybqraOjtcR2F1w/XBaPMhdVXHrEC2WMkEXZGuOGwOBPuXWrLaWyND21ocqgg+BXo4GMlGSa5/8MOLnBzWVp6cmZ0RFtMwREQBERAEREAREQBERAEREAXxfUQESXR8Lu1Cw/VCjv0FZz+hHcXD3FWaLqk1sQlThLdL0RTu1bs5+QRyc74rEdV4P1h9b4hXqLueXUg8PS+lehr51Uh9p/i3+leTqlF84/8Ad/pWxIu8SXUj8rR+lGt/kjH86/8Ad+C+fkiz513gFsqLvFn1OfJ0PpRrDtT2HOU97Qsf5FRfOH7IHuK2tFCTzdqz8l+CyFGMOzdeDa/hmonUaL51/gPvXz8hYvnpPBvwW3oqHh6T/avSxpjWqL9z9W/5uah+Qsfz8ng34L2zUaHbLKfsD+VbYij8rR+kl8xV+o1hmpNmGbpD9YfcFIZqnZh8l32lforYU4w7KS8iqbc9JO5Ts1csw/Rk83P+Kzs0LAP0Le+p96sUVrnJ8ylUacdor0RHhssbOzG1vIAe5SERRLEktgiIh0IiIAiIgCIiA//Z"
    },
        {
        title:"Anonymous-Chat",
        content:"Using the socketIO to let user join the a room ans chat  begin anonymous for certain time without ",
        link:"https://github.com/HARSHV10",
        img:"https://w7.pngwing.com/pngs/456/189/png-transparent-minecraft-computer-icons-client-computer-servers-ghost-linux-client-smile-thumbnail.png"
    },
        {
        title:"Pokedex",
        content:"developd the pokedex proeject using the pokeapi which tells the information about the diffrent pokemon and their types ",
        link:"https://pokedex-olive-gamma.vercel.app/",
        img:"data:image/png;base64,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"
    },
        {
        title:"Ethereum_CryptoGraphy",
        content:"developed a project that use ethereum cryptography authentication using prublic private key encryption to verify the transaction  ",
        link:"https://github.com/HARSHV10/ethereum_cryptography",
        img:"https://ethereum.org/static/28214bb68eb5445dcb063a72535bc90c/5a3c8/hero.webp"
    },
        {   
        title:"DBank",
        content:"Used Motoko and ICP (Dfinity) to develop Dapp that stores the client account information and performs the transaction",
        link:"https://github.com/HARSHV10",
        img:"data:image/jpeg;base64,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"
    },
        {
        title:"BlockExplorer",
        content:"Working on the project BlockExplorer that uses the etherJS to get all the information about the transaction and create you digital signature ",
        link:"https://github.com/HARSHV10",
        img:"data:image/png;base64,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"
    },
]
    return(
        <div id="Projects">
        <div className='Projects'>Projects</div>
        <div className="card-layout">
        {
            arr.map(i=>{
                return(<div className='card'><CardDesign title={i.title} content={i.content} link={i.link} img={i.img} /></div>)
            })
        }
        </div>  
        </div>
    );
}