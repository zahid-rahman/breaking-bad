import React,{useState} from 'react'

const Search = ({ getQuery }) => {
    const [text,setText] = useState('')

    const onChange = (query) => {
        setText(query)
        getQuery(query)
    }
    
    return (
        <section className='search'>
            <form action="">
                <input type="text" className="form-control =" 
                name="" 
                placeholder="Search character"
                value={text}
                onChange={(event) => onChange(event.target.value)}
                autoFocus    
            />
            </form>
        </section>
    )
}

export default Search
