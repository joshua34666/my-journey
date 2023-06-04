import React from 'react'

const MemoComp = ({name})  => {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

// export default MemoComp
export default React.memo(MemoComp)