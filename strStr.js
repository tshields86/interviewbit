/* https://www.interviewbit.com/problems/implement-strstr/ */

const strStr = (a, b) =>{
    for (let i = 0; i < a.length; i++) {
        let isSame = true;

        for (let j = 0; j < b.length; j++) {
            if (a[i + j] !== b[j]) isSame = false;
        }

        if (isSame) return i;
    }

    return -1;
};