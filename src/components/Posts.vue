<template>
    <div>
        <Header/>
        <h1>TERE</h1>
    </div>
</template>

<script>
 
</script>

<style scoped>
    .add-post-container {
        width: 50%;
        min-height: 100%;
        margin: auto auto;
        padding: 15px;
        background-color: #ffffff;
        margin-bottom: 20px;
    }

    .post {
        width: 80%;
        margin: 15px auto;
        /* box-shadow: 0 0 15px rgba(38, 50, 56, 0.33); */
        border-radius: 5px;
    }

    .post .post-author {
        padding: 10px;
    }

    .post .post-author::after {
        content: "";
        display: block;
        clear: both;
    }

    .post .post-author .post-author-info {
        float: left;
        position: relative;
        width: 50%;
        margin: 10px 0;
    }

    .post .post-author .post-author-info img {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .post .post-author .post-author-info small {
        position: absolute;
        top: 12px;
        left: 45px;
    }

    .post .post-author .post-author-info + small {
        float: right;
        color: grey;
        padding: 10px;
        margin: 10px 0;
    }

    .post .post-image img, video {
        width: 100%;
        min-height: 150px;
        max-height: 350px;
        object-fit: cover;
        object-position: top center;
    }

    .post .post-title {
        padding: 10px;
    }

    .post .post-title h3 {
        display: inline;
    }

    .post .post-title ~ .post-actions {
        padding: 10px;
    }
</style>
