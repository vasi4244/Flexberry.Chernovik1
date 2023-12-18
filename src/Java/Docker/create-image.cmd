docker build --no-cache -f SQL\Dockerfile.PostgreSql -t chernovik_1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t chernovik_1-java/app ../../..
