export default function AddForm({}){
    return(
        <form className="todform" onSubmit={handleClick}>
            <label htmlFor="todtitle">ToD tit:</label>
            <input name="title" type="text" id="todtitle" placeholder="dra hjem" onChange={handleChange}/>
            <label htmlFor="todcontent">Beskrivelse:</label>
            <textarea name="content" id="todcontent" onChange={handleChange}></textarea>
            <button>Make tod</button>
        </form>
    )
}