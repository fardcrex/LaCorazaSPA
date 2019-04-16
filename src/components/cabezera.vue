<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Maldives</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-lg-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Destination</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>

<style>
.bg-light
{
    background-color: transparent !important;
    padding: 1.5rem 0;
    z-index: 10;
}
.navbar-light .navbar-brand,
.navbar-light .navbar-brand:visited,
.navbar-light .navbar-brand:hover
{
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link {
    color: #fff;
}
.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:visited,
.navbar-light .navbar-nav .nav-link:focus
{
    color: #fff;
}
.navbar-toggler
{
	background: #fff;
	border-radius: 0;
}
@media (min-width: 992px)
{
	.navbar-expand-lg .navbar-nav .nav-link {
	    padding-right: 0;
	    padding-left: 0;
	    margin-right: 1.2rem;
	    margin-left: 1.2rem;
	}
	.nav-item.active a
	{
		border-bottom: 2px solid #fff;
	}
}
@media (max-width: 991px)
{
	header
	{
		position: fixed;
		width: 100%;
		z-index: 100;
		background: #000 !important;
	}
	header .bg-light
	{
		padding: .5rem 0;
	}
	.banner-text
	{
		padding: 20px;
		margin: 36vh 50px 0 0;
	}
}


</style>
