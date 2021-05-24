<template>
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <div>
                <h2>Listado de Libros</h2>
                <b-button size="sm" :to="{name:'NewBook'}" variant="primary">Nuevo libro</b-button>
                </div>
                <br>
                <div class="col-md-12">
                    <b-table striped hover :items="books" :fields="fields">
                        <template #cell(action)="data" >
                             <b-button class="mx-2" size="sm" variant="primary" :to="{name:'EditBook',params:{Bookid:data.item.id}}">
                                Editar
                            </b-button>
                            <b-button size="sm" variant="danger" :to="{name:'DeleteBook',params:{Bookid:data.item.id}}">
                                Eliminar
                            </b-button>
                        </template>
                    </b-table>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            fields: [
                {key:'title', label:'Título'},
                {key:'description', label:'Descripción'},
                {key:'action', label:''}
            ],
            books:[]
        }
    },
    methods: {
        async getBooks(){
            const path='http://localhost:8000/api/v1.0/books/';
            try {
                const res = await axios.get(path);
                this.books = res.data;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getBooks();
    },
}
</script>