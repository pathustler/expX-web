import { redirect } from 'next/navigation';

export default function useUser(){
    const user = localStorage.getItem("loginUser") || null

    if (user != null){
        return user
    }else{
        redirect('/login');
    }
}