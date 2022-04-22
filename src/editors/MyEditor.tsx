import 'prosemirror-view/style/prosemirror.css';

import React from 'react';
import {useProseMirror, ProseMirror} from 'use-prosemirror';
import { mySchema } from './mySchema';


export const MyEditor = () => {
    const [state, setState] = useProseMirror({schema: mySchema});
    return (
        <div>
            <p>below</p>
            <ProseMirror state={state} onChange={setState} />
            <p>above</p>

        </div>
    )
}